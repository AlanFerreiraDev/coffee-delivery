import { ReactNode } from 'react'
import { Coffee } from './../../pages/Home/components/CoffeeCard/interfaces'

export interface CartItem extends Coffee {
  quantity: number
}

export interface CartContextProps {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void
  removeCartItem: (cartItemId: number) => void
  cleanCart: () => void
}

export interface CartContextProviderProps {
  children: ReactNode
}
