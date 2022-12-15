import { TitleText } from '../../../../components'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export const SelectedCoffees = () => {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <p>itens</p>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
