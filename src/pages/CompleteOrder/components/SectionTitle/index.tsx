import { RegularText } from '../../../../components'
import { SectionTitleProps } from './interfaces'
import { SectionTitleContainer } from './styles'

export const SectionTitle = ({ title, subtitle, icon }: SectionTitleProps) => {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SectionTitleContainer>
  )
}
