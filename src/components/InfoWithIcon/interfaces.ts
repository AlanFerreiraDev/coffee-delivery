import { ReactNode } from 'react'

export interface InfoWithIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconImageProps
  text: string | ReactNode
  iconBgColor: string
}

interface IconImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}
