import { ShoppingCart } from 'phosphor-react'
import { QuantityInput, RegularText, TitleText } from '../../../../components'
import { formatMoney } from '../../../../utils/formatMoney'
import { CoffeeProps } from './interfaces'

import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
  Tags,
} from './styles'

export const CoffeeCard = ({ coffee }: CoffeeProps) => {
  const formattedPrice = formatMoney(coffee.price)
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="Imagem do café selecionado" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
