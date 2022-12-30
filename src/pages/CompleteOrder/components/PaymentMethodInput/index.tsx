import { ContentContainer, PaymentMethodInputContainer } from './styles'
import { CreditCard } from 'phosphor-react'
import { PaymentMethodInputProps } from './interfaces'
import { forwardRef } from 'react'

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input type="radio" id={id} {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  )
})
