const ContactForm = () => {
  return (
    <div className="w-full p-6 flex justify-center bg-white rounded-lg h-1/2 shadow-md">
      <div className="min-w-80 xl:w-1/2 p-10 max-w-2xl bg-[#252525] rounded-lg shadow-lg">
        <form action="">
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">Your Name</label>
            <input required className="w-full px-3 py-2 border rounded-lg bg-white focus:border-blue-500" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">Your Email</label>
            <input required className="w-full px-3 py-2 border rounded-lg bg-white focus:border-blue-500" type="email" />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">Your Message</label>
            <textarea required className="w-full px-3 py-2 border rounded-lg bg-white focus:border-blue-500" type="text" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-[#3728cf] transition-all text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#171157] focus:outline-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
