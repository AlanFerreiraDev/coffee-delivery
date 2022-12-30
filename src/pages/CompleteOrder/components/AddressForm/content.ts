interface AddressFormDataProps {
  id: string
  placeholder: string
  type?: string
  className?: string
  rightText?: string
}

export const AddressFormData: AddressFormDataProps[] = [
  {
    id: 'cep',
    placeholder: 'CEP',
    type: 'number',
    className: 'cep',
  },
  {
    id: 'street',
    placeholder: 'Rua',
    className: 'street',
  },
  {
    id: 'number',
    placeholder: 'Número',
    type: 'number',
  },
  {
    id: 'complement',
    placeholder: 'Complemento',
    className: 'complement',
    rightText: 'Opcional',
  },
  {
    id: 'neighborhood',
    placeholder: 'Bairro',
  },
  {
    id: 'city',
    placeholder: 'Cidade',
  },
  {
    id: 'state',
    placeholder: 'UF',
  },
]
