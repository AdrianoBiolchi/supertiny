import { Routes, Route } from 'react-router-dom'
import Orders from './pages/Orders'
import Order from './pages/Orders/Order'
import { NotFound } from './pages/NotFound'
import { DefaultLayout } from './layouts/DefaultLayout'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/vendas" element={<Orders />} />
        <Route path="/vendas/:id" element={<Order />} />
      </Route>
    </Routes>
  )
}
