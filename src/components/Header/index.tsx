import { HeaderButtonsContainer, HeaderContainer } from './styles'

import cofeeLogoImg from '../../assets/header/coffee-delivery-logo.svg'
import { HeaderButton } from './components/HeaderButton'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks'

export const Header = () => {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img
            src={cofeeLogoImg}
            alt="logotipo CoffeDelivery, um copo de café na cor roxa"
          />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">São Paulo, SP</HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
