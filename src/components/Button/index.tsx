import { ButtonProps } from './interfaces'
import { ButtonContainer } from './styles'

export const Button = ({ text, ...props }: ButtonProps) => {
  return <ButtonContainer {...props}>{text}</ButtonContainer>
}
