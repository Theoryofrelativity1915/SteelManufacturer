import { ChooseUs } from "../components/ChooseUs"
import ImageCarousel from "../components/ImageCarousel"
import MoreInfoButtons from "../components/MoreInfoButtons"
import SecondaryCarousel from '../components/SecondaryCarousel'
import ShortAboutSection from "../components/ShortAboutSection"

export const Home = () => {
  return (
    <div className="h-auto">
      <ImageCarousel />
      <MoreInfoButtons />
      <SecondaryCarousel />
      <ChooseUs/>
    </div>
  )
}
