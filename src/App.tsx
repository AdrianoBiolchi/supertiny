import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { OrdersProvider } from './contexts/OrdersContext'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <OrdersProvider>
          <Router />
        </OrdersProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
