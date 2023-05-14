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
}

interface OrdersProviderProps {
  children: ReactNode
}

export const OrdersContext = createContext({} as OrderContextType)

export function OrdersProvider({ children }: OrdersProviderProps) {
  const [orders, setOrders] = useState<Order[]>([])

  async function loadOrders() {
    const response = await api.get(
      '/pedidos.pesquisa.php?token=5faf325d1590a4d607fd7f803f9460e8bce9635a&formato=JSON',
      // // {
      // //   headers: {
      // //     'Access-Control-Allow-Origin': '*',
      // //     'Access-Control-Allow-Headers': 'Authorization',
      // //     'Access-Control-Allow-Methods':
      // //       'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      // //     'Content-Type': 'application/json;charset=UTF-8',
      // //   },
      //   // params: {
      //   //   q: query,
      //   // },
      // },
    )

    //setOrders(response.data)
  }
  console.log('/api')
  useEffect(() => {
    loadOrders()
  }, [])

  console.log(orders)

  return (
    <OrdersContext.Provider value={{ orders }}>
      {children}
    </OrdersContext.Provider>
  )
}
