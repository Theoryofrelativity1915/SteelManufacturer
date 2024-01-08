const ContactForm = () => {
  return (
    <div className="flex flex-col w-full sm:w-3/4 md:w-1/2 xl:min-h-[500px] p-10 bg-[#252525] rounded-lg shadow-lg">
      <form action="" className="flex flex-col flex-grow">
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2">Your Name</label>
          <input required className="w-full px-3 py-2 border rounded-lg bg-white focus:border-blue-500" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2">Your Email</label>
          <input required className="w-full px-3 py-2 border rounded-lg bg-white focus:border-blue-500" type="email" />
        </div>
        <div className="mb-4 flex flex-grow flex-col">
          <label className="block text-white text-sm font-semibold mb-2">Your Message</label>
          <textarea required className="w-full flex flex-grow px-3 py-2 border rounded-lg bg-white focus:border-blue-500" type="text" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-[#3728cf] transition-all text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#171157] focus:outline-white">
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
