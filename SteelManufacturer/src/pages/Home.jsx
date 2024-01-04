import { ChooseUs } from "../components/ChooseUs"
import ContactForm from "../components/ContactForm"
import ImageCarousel from "../components/ImageCarousel"
import MoreInfoButtons from "../components/MoreInfoButtons"
import SecondaryCarousel from '../components/SecondaryCarousel'
import ShortAboutSection from "../components/ShortAboutSection"
import { Testimonials } from "../components/Testimonials"

export const Home = () => {
  return (
    <div className="relative h-auto">
      <ImageCarousel />
      <MoreInfoButtons />
      <SecondaryCarousel />
      <ChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  )
}
