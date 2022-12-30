export interface QuantityInputProps {
  size?: 'small' | 'medium'
  quantity?: number
  onIncrease?: () => void
  onDecrease?: () => void
}
