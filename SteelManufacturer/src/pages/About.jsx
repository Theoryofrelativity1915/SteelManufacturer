import Footer from "../components/Footer"
import image from '../assets/scott-blake-s9XDWLJ_LyE-unsplash.jpg'
function About() {
  return (
    <div className="w-full mt-[5rem] flex flex-col items-center flex-grow">
      <div className="flex w-full md:w-5/6 pb-12 flex-col md:flex-row flex-grow items-center">
        <img src={image} className="object-cover object-center p-4 md:w-1/2" />
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h4 className="relative text-5xl after:absolute after:h-[3px] w-min whitespace-nowrap after:w-full after:content-[''] after:left-0 after:bottom-0 after:mt-1 after:bg-[#171157]">About Us</h4>
          <p className="text-xl sm:text-2xl text-center p-10">Corona Steel stands tall as a paramount force in the Pacific Northwest's steel construction realm. Renowned for their precision, innovation, and unwavering commitment to excellence, this company has etched its name as a beacon of reliability and quality in the industry. With a seasoned team of experts, Corona Steel breathes life into architectural dreams, erecting monumental structures that define the skyline. Their mastery extends beyond erecting steel; they weave a tapestry of strength and durability, shaping the landscape with an unparalleled blend of craftsmanship and cutting-edge engineering. Their legacy is etched in the towering edifices they've erected, a testament to their unwavering dedication to shaping the Pacific Northwest's skyline.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
