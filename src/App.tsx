import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Orders } from './pages/Orders'
import { OrdersProvider } from './contexts/OrdersContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <OrdersProvider>
        <Orders />
      </OrdersProvider>
    </ThemeProvider>
  )
}
