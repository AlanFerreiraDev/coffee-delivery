import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderButtonProps } from './interfaces'
import { StyledHeaderButton } from './styles'

export const HeaderButton = ({ variant, children }: HeaderButtonProps) => {
  return (
    <StyledHeaderButton variant={variant}>
      {variant === 'purple' && (
        <>
          <MapPin size={20} weight="fill" />
          {children}
        </>
      )}

      {variant !== 'purple' && (
        <>
          {children}
          <ShoppingCart size={20} weight="fill" />
        </>
      )}
    </StyledHeaderButton>
  )
}
