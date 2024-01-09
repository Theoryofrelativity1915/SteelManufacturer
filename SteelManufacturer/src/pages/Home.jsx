import { ChooseUs } from "../components/ChooseUs"
import ContactForm from "../components/ContactForm"
import ImageCarousel from "../components/ImageCarousel"
import MoreInfoButtons from "../components/MoreInfoButtons"
import SecondaryCarousel from '../components/SecondaryCarousel'
import { Testimonials } from "../components/Testimonials"
import Footer from "../components/Footer"
export const Home = () => {
  return (
    <div className="relative h-auto mt-[5rem]">
      <ImageCarousel />
      <MoreInfoButtons />
      <SecondaryCarousel />
      <ChooseUs />
      <Testimonials />
      <div className="w-full p-6 mb-16 mt-16 flex justify-center h-1/2 ">
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}
