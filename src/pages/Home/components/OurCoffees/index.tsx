import { TitleText } from '../../../../components'
import { CoffeeCard } from '../CoffeeCard'
import { coffees, OurCoffeesDescriptionText } from './content'
import { CoffeeList, OurCoffeesContainer } from './styles'

export const OurCoffees = () => {
  const { intro } = OurCoffeesDescriptionText
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        {intro}
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee.id} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
