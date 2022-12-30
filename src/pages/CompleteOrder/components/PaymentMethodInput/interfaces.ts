import { InputHTMLAttributes } from 'react'

export type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode
  label: string
}
