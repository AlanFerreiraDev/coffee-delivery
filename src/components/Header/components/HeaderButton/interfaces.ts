import { ButtonHTMLAttributes } from 'react'

export interface HeaderButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'purple' | 'yellow'
  children?: React.ReactNode
}
