import { useContext, useRef } from 'react'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { OrdersContainer, OrdersTable, PriceHighlight } from './styles'
import { OrdersContext } from '../../contexts/OrdersContext'
import { priceFormatter } from '../../utils/formatter'
import { NavLink } from 'react-router-dom'
import { Printer } from 'phosphor-react'

import { api } from '../../lib/axios'

import { useReactToPrint } from 'react-to-print'

export default function Orders() {
  const { orders } = useContext(OrdersContext)

  return (
    <div>
      <Summary />
      <OrdersContainer>
        <SearchForm />
        <OrdersTable>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order.pedido.id}>
                  <td width="50%">{order.pedido.nome} </td>

                  <td>
                    <PriceHighlight variant="income">
                      {priceFormatter.format(order.pedido.valor)}
                    </PriceHighlight>
                  </td>
                  <td>{order.pedido.data_pedido}</td>
                  <td>{order.pedido.nome_vendedor}</td>
                  <td>
                    {/* <NavLink to={`/vendas/${order.pedido.numero}`}>
                      <Printer size={30} />
                    </NavLink> */}
                    <button onClick={() => {}}>
                      <Printer size={30} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </OrdersTable>
      </OrdersContainer>
    </div>
  )
}
