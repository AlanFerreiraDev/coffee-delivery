import { InfoWithIconProps } from './interfaces'
import { IconContainer, InfoWithIconContainer } from './styles'

export const InfoWithIcon = ({
  icon,
  text,
  iconBgColor,
}: InfoWithIconProps) => {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBgColor={iconBgColor}>
        <img src={icon.src} alt={icon.alt} />
      </IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
