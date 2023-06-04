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
        <TablePrint ref={componentRef}>{renderItems()}</TablePrint>
        <ReactToPrint
          trigger={() => <PrintButton>Imprimir etiquetas</PrintButton>}
          content={() => componentRef.current}
        />
      </OrderList>
    </OrderContainer>
  )
}

export default LabelPrinting
