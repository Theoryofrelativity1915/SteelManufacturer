import { ChooseUs } from "../components/ChooseUs"
import ContactForm from "../components/ContactForm"
import ImageCarousel from "../components/ImageCarousel"
import MoreInfoButtons from "../components/MoreInfoButtons"
import SecondaryCarousel from '../components/SecondaryCarousel'
import { Testimonials } from "../components/Testimonials"
import Footer from "../components/Footer"
export const Home = () => {
  return (
    <div className="relative h-auto">
      <ImageCarousel />
      <MoreInfoButtons />
      <SecondaryCarousel />
      <ChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}
