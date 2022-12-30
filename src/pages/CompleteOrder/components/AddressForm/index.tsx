import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components'
import { AddressFormData } from './content'
import { ErrorsType } from './interfaces'
import { AddressFormContainer } from './styles'

export const AddressForm = () => {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      {AddressFormData.map((input) => (
        <Input
          key={input.id}
          placeholder={input.placeholder}
          type={input.type}
          className={input.className}
          {...register(`${input.id}`)}
          error={errors[input.id]?.message}
          rightText={input.rightText}
        />
      ))}
    </AddressFormContainer>
  )
}
