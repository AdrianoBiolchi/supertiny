import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useContext } from 'react'
import { OrdersContext } from '../../../../contexts/OrdersContext'

export function SearchForm() {
  const { fetchOrders } = useContext(OrdersContext)
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque pelo nome do cliente" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
