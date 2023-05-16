import {
  HeaderContainer,
  HeaderContent,
  LogoMenu,
  NewOrderButton,
} from './styles'
import logoImg from '../../assets/logo-supertiny.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoMenu src={logoImg} />
        <NewOrderButton>Novo Menu</NewOrderButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
