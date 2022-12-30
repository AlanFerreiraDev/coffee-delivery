import { TitleText } from '../../../../components'
import { useCart } from '../../../../hooks'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './components/ConfirmationSection'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export const SelectedCoffees = () => {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
