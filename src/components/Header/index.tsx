import {
  HeaderContainer,
  HeaderContent,
  LogoMenu,
  NewOrderButton,
} from './styles'
import { useLocation, useNavigate } from 'react-router-dom'

import logoImg from '../../assets/logo-supertiny.svg'

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoMenu src={logoImg} />
        <div>
          <NewOrderButton onClick={() => navigate('/vendas')}>
            Pedidos
          </NewOrderButton>

          {location.pathname === '/' ? null : (
            <NewOrderButton onClick={() => navigate('/')}>
              Voltar
            </NewOrderButton>
          )}
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
