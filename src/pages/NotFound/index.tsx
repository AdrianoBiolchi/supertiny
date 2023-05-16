import { Link } from 'react-router-dom'

import { Container } from './styles'

export function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <h2>WHOOPS!</h2>
      <p>Nós não conseguimos achar a página que você deseja.</p>
      <Link to="/">Voltar ao site</Link>
    </Container>
  )
}
