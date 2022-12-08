import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles'
import IntroImg from '../../../../assets/home/intro-img.png'

import { InfoWithIcon, RegularText } from '../../../../components'
import { BenefitsList, IntroDescriptionText } from './content'

export const Intro = () => {
  const { intro, regular } = IntroDescriptionText
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">{intro}</IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              {regular}
            </RegularText>
          </section>

          <BenefitsContainer>
            {BenefitsList.map((item, index) => {
              return (
                <InfoWithIcon
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  iconBgColor={item.iconBgColor}
                />
              )
            })}
          </BenefitsContainer>
        </div>
        <img
          src={IntroImg}
          alt="Imagem de copo de café com grãos de café ao redor"
        />
      </IntroContent>
    </IntroContainer>
  )
}
