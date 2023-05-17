import React, { useEffect, useState, useRef } from 'react'

import ReactToPrint from 'react-to-print'

import { useParams } from 'react-router-dom'

import { api } from '../../../lib/axios'
import { OrderContainer, OrderList, PrintButton } from './styles'

const Label: React.FC<{ item: any }> = ({ item }) => (
  <div
    style={{ 
          width: '30mm', 
          height: '15mm', 
          border: '1px solid black', 
          margin: '1mm', 
          padding: '1mm', 
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
  >
    <p style={{ fontSize: '9px', color: '#000' }}>
      Cód: <b>{item.item.codigo}</b>
    </p>
    <p style={{ fontSize: '9px', color: '#000' }}>{item.item.descricao}</p>
    <p style={{ fontSize: '9px', color: '#000' }}>QTD:{item.item.quantidade}</p>
  </div>
)

const LabelPrinting: React.FC = () => {
  const { id } = useParams()
  const [items, setItems] = useState<any[]>([])
  const printRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchItems = async () => {
      const response = await api.get<any[]>(`/vendas/${id}`)
      const { itens } = response.data
      setItems(itens)
    }

    fetchItems()
  }, [id])

  return (
    <OrderContainer>
      <OrderList>
        <div style={{ display: 'none' }}>
          <div
            ref={printRef}
            style={{  width: '100mm', display: 'flex', flexWrap: 'wrap',  }}
          >
            {items.map((item) => (
              <Label key={item.id} item={item} />
            ))}
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>
                <ReactToPrint 
                  trigger={() =>
                    isLoading === true ? (
                      <PrintButton>Gerando...</PrintButton>
                    ) : (
                      <PrintButton>Imprimir etiquetas</PrintButton>
                    )
                  }
                  content={() => printRef.current}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id}>
                <td>{i.item.codigo}</td>
                <td>{i.item.descricao}</td>
                <td align="center">{i.item.quantidade}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </OrderList>
    </OrderContainer>
  )
}

export default LabelPrinting
