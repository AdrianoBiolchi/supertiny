import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { OrdersContainer, OrdersTable, PriceHighlight } from './styles'
import { OrdersContext } from '../../contexts/OrdersContext'
import { priceFormatter } from '../../utils/formatter'

export function Orders() {
  const { orders } = useContext(OrdersContext)
  return (
    <div>
      <Header />
      <Summary />
      <OrdersContainer>
        <SearchForm />
        <OrdersTable>
          <tbody>
            {orders.map((order) => {
              return (
                <tr>
                  <td width="50%">{order.pedido.nome}</td>
                  <td>
                    <PriceHighlight variant="income">
                      {priceFormatter.format(parseInt(order.pedido.valor))}
                    </PriceHighlight>
                  </td>
                  <td>{order.pedido.data_pedido}</td>
                  <td>{order.pedido.nome_vendedor}</td>
                </tr>
              )
            })}
          </tbody>
        </OrdersTable>
      </OrdersContainer>
    </div>
  )
}
