import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { OrdersContainer, OrdersTable, PriceHighlight } from './styles'
import { OrdersContext } from '../../contexts/OrdersContext'

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
                  <td width="50%">Nome do Cliente</td>
                  <td>
                    <PriceHighlight variant="income">R$1480,00</PriceHighlight>
                  </td>
                  <td>20/05/2023</td>
                  <td>Vendedor</td>
                </tr>
              )
            })}
          </tbody>
        </OrdersTable>
      </OrdersContainer>
    </div>
  )
}
