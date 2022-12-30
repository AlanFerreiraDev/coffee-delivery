import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import { InputProps } from './interfaces'
import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RightText,
} from './styles'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  }
)
