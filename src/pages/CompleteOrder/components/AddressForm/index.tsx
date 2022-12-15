import { Input } from '../../../../components'
import { AddressFormData } from './content'
import { AddressFormContainer } from './styles'

export const AddressForm = () => {
  return (
    <AddressFormContainer>
      {AddressFormData.map((input) => (
        <Input
          key={input.id}
          placeholder={input.placeholder}
          type={input.type}
          className={input.className}
        />
      ))}
    </AddressFormContainer>
  )
}
