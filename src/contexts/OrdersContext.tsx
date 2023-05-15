import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '../lib/axios'

interface Order {
  id: number
  numero: number
  data_pedido: string
  nome: string
  valor: string
  nome_vendedor: string
  situacao: string
}

interface OrderContextType {
  orders: Order[]
  fetchOrders: () => Promise<void>
}

interface OrdersProviderProps {
  children: ReactNode
}

export const OrdersContext = createContext({} as OrderContextType)

export function OrdersProvider({ children }: OrdersProviderProps) {
  const [orders, setOrders] = useState<Order[]>([])

  async function fetchOrders() {
    const response = await api.get('/pedidos')
    setOrders(response.data.retorno.pedidos)
  }
  console.log('/api')
  useEffect(() => {
    fetchOrders()
  }, [])

  console.log(orders)

  return (
    <OrdersContext.Provider
      value={{
        orders,
        fetchOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
