import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div className='relative justify-center flex-shrink flex-grow flex flex-col items-center mt-[5rem]'>
      <div className='flex w-full flex-grow flex-col items-center justify-center p-6 sm:p-0'>
        <h4 className='text-2xl sm:text-4xl mb-8 text-center mt-2 sm:mt-0'>Reach out to us below and we'll get in touch soon.</h4>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
