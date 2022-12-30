import { useContext } from 'react'
import { CartContext } from '../../contexts'

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}
