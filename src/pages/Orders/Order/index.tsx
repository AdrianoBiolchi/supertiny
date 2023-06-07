import React, { useEffect, useState, useRef, useCallback } from 'react'
import ReactToPrint from 'react-to-print'
import { useParams } from 'react-router-dom'
import { api } from '../../../lib/axios'
import {
  LabelPrint,
  OrderContainer,
  OrderList,
  PrintButton,
  TablePrint,
} from './styles'

interface Item {
  item: {
    id: string
    codigo: string
    descricao: string
    quantidade: string
  }
}

const useFetchItems = (id: string) => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const fetchItems = async () => {
      const response = await api.get(`/vendas/${id}`)
      setItems(response.data.itens || [])
    }

    fetchItems()
  }, [id])

  return items
}

const LabelPrinting: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const items = useFetchItems(id)
  const componentRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const renderItems = useCallback(() => {
    return items.map((item) => (
      <LabelPrint key={item.item.id}>
        <p style={{ fontSize: '12px' }}>
          <b>COD</b>:{item.item.codigo}
        </p>
        <p style={{ fontSize: '12px' }}>{item.item.descricao}</p>
        <p style={{ fontSize: '12px' }}>
          <b>QTD:</b> {item.item.quantidade}
        </p>
      </LabelPrint>
    ))
  }, [items])

  return (
    <OrderContainer>
      <OrderList>
      <div style={{ display: 'none' }}>
        <TablePrint ref={componentRef}>{renderItems()}</TablePrint>
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
                      <ReactToPrint
                      trigger={() => <PrintButton>Gerando...</PrintButton>}                     
                    />
                    ) : (
                      <ReactToPrint
                      trigger={() => <PrintButton>Imprimir etiquetas</PrintButton>}
                      content={() => componentRef.current}
                    />
                    )
                  }
                  content={() => componentRef.current}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.item.id}>
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
