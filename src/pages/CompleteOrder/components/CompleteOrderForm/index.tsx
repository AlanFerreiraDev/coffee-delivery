import { TitleText } from '../../../../components'
import { SectionTitle } from '../SectionTitle'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'

import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { SectionTitleData } from './content'
import { AddressForm } from '../AddressForm'
import { PaymentMethodOptions } from '../PaymentMethodOptions'

export const CompleteOrderForm = () => {
  const { colors } = useTheme()
  const { delivery, payment } = SectionTitleData

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title={delivery?.title}
          subtitle={delivery?.subtitle}
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title={payment?.title}
          subtitle={payment?.subtitle}
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
