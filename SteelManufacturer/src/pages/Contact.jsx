import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div className='relative justify-center flex-shrink flex-grow flex flex-col items-center '>
      <div className='flex w-full flex-grow flex-col items-center justify-center'>
        <h4 className='text-4xl mb-8'>Reach out to us below and we'll get in touch soon.</h4>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
