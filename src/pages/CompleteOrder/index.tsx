import { CompleteOrderForm, SelectedCoffees } from './components'
import { CompleteOrderContainer } from './styles'

export const CompleteOrderPage = () => {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  )
}
