import { Button, RegularText } from '../../../../../../components'
import { useCart } from '../../../../../../hooks'
import { formatMoney } from '../../../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export const ConfirmationSection = () => {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = cartItemsTotal + DELIVERY_PRICE

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  const formattedCartTotal = formatMoney(cartTotal)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText size="m">R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText size="m">R$ {formattedDeliveryPrice}</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          {formattedItemsTotal === '0,00' && `R$ 0,00`}
          {formattedItemsTotal !== '0,00' && `R$ ${formattedCartTotal}`}
        </RegularText>
      </div>

      <Button
        text="confirmar pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
