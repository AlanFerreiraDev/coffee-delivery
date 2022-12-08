import { OurCoffees } from './components'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export const HomePage = () => {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}
