import { useContext } from 'react'

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'

import { OrdersContext } from '../../contexts/OrdersContext'
import { priceFormatter } from '../../utils/formatter'

export function Summary() {
  const { orders } = useContext(OrdersContext)
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Pedidos</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>181</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Cancelados</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>3</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Totais</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(parseInt('450000'))}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
