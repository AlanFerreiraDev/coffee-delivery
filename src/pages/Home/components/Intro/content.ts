import { InfoWithIconProps } from '../../../../components/InfoWithIcon/interfaces'

import ShoppingCartIcon from '../../../../assets/intro/shopping-cart.svg'
import PackageIcon from '../../../../assets/intro/package.svg'
import TimerIcon from '../../../../assets/intro/timer.svg'
import CoffeeIcon from '../../../../assets/intro/coffee.svg'

import { defaultTheme } from '../../../../styles/themes/default'
import { ISectionDescriptionText } from './interfaces'
const { colors } = defaultTheme

export const BenefitsList: InfoWithIconProps[] = [
  {
    icon: {
      src: ShoppingCartIcon,
      alt: 'ícone de carrinho de compras',
    },
    text: 'Compra simples e segura',
    iconBgColor: `${colors['brand-yellow-dark']}`,
  },
  {
    icon: {
      src: PackageIcon,
      alt: 'ícone de pacote',
    },
    text: 'Embalagem mantém o café intacto',
    iconBgColor: `${colors['base-text']}`,
  },
  {
    icon: {
      src: TimerIcon,
      alt: 'ícone de relógio',
    },
    text: 'Entrega rápida e rastreada',
    iconBgColor: `${colors['brand-yellow']}`,
  },
  {
    icon: {
      src: CoffeeIcon,
      alt: 'ícone de ma chícara de café',
    },
    text: 'O café chega fresquinho até você',
    iconBgColor: `${colors['brand-purple']}`,
  },
]

export const IntroDescriptionText: ISectionDescriptionText = {
  intro: 'Encontre o café perfeito para qualquer hora do dia',
  regular:
    'Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora',
}
