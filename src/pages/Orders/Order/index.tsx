import React, { useEffect, useState, useRef } from 'react'

import ReactToPrint from 'react-to-print';

import { useParams } from 'react-router-dom'

import { api } from '../../../lib/axios'
import { LabelPrint, OrderContainer, OrderList, PrintButton, TablePrint } from './styles'

interface Item {
  item: {
    id: string;
    codigo: string;
    descricao: string;
    quantidade: string;
  }
}

const LabelPrinting: React.FC = () => {
  const { id } = useParams()
  const [items, setItems] = useState<Item[]>([])
  const componentRef = useRef();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchItems = async () => {
      const response = await api.get<Item[]>(`/vendas/${id}`)
      const { itens } = response.data
      setItems(itens)
    }

    fetchItems()
  }, [id])

  const renderItems = () => {
    if (items.length === 0) {
      return <p>Carregando...</p>;
    }

    return items.map((item) => (
      <LabelPrint
        key={item.item.id}       
      >
        <p style={{ fontSize: '8px' }}>{item.item.codigo}</p>
        <p style={{ fontSize: '8px' }}>{item.item.descricao}</p>
        <p style={{ fontSize: '8px' }}>{item.item.quantidade}</p>
      </LabelPrint>
    ));
  };


  return (
    <OrderContainer>
      <OrderList>
        <div style={{ display: 'none' }}>
          <TablePrint ref={componentRef} >
            {renderItems()}
          </TablePrint>
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
