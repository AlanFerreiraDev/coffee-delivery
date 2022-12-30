import { Minus, Plus } from 'phosphor-react'
import { QuantityInputProps } from './interfaces'
import { IconWrapper, QuantityInputContainer } from './styles'

export const QuantityInput = ({
  onIncrease,
  onDecrease,
  quantity = 0,
  size = 'medium',
}: QuantityInputProps) => {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
