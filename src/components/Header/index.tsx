import { HeaderButtonsContainer, HeaderContainer } from './styles'

import cofeeLogoImg from '../../assets/header/coffee-delivery-logo.svg'
import { HeaderButton } from './components/HeaderButton'

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img
          src={cofeeLogoImg}
          alt="logotipo CoffeDelivery, um copo de café na cor roxa"
        />
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">Porto Alegre, RS</HeaderButton>
          <HeaderButton variant="yellow" />
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
