
const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-gray-700 h-64">
      <div className="flex w-full p-10 md:w-3/4 flex-grow justify-center gap-24">
        <div className="hidden sm:flex flex-col w-2/3 sm:w-1/2">
          <h4 className="text-3xl text-white after:absolute after:h-[2px] after:w-28 after:translate-y-9 after:-translate-x-[7.4rem] after:content-[''] after:border after border-black pb-4 after:mt-1 after:border-[#171157]">About Us</h4>
          <p className="text-white text-xl">Corona Steel stands as the bedrock of precision and reliability in the steel construction industry in the PNW.</p>
        </div>
        <div className="flex flex-col w-1/2 justify-center sm:justify-start sm:w-1/2">
          <h4 className="relative text-3xl text-white after:absolute after:h-[2px] after:w-36 after:translate-y-9 after:-translate-x-[8.8rem] after:content-[''] after:border after border-black pb-4 after:mt-1 after:border-[#171157]">Contact Us</h4>
          <div className="text-white text-xl">
            <div>253-123-4567</div>
            <div>coronasteel@gmail.com</div>
            <div>Monday-Friday 9am-5pm</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-4 bg-[#252525]">
        <section className="text-white">
          © Copyright 2015. "Corona Steel" by Corona Steel LLC. All rights reserved.
        </section>
      </div>
    </div>
  )
}
export default Footer;
