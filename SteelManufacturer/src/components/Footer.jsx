import Copyright from './Copyright'
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-700">
      <div className="flex w-full p-8 md:w-3/4 flex-grow justify-center gap-24">
        <div className="hidden sm:flex flex-col w-2/3 sm:w-1/2">
          <h4 className="relative text-2xl text-white after:absolute after:h-[3px] w-min whitespace-nowrap after:w-full after:content-[''] after:left-0 after:bottom-0 after:mt-1 after:bg-[#171157]">About Us</h4>
          <p className="text-white">Corona Steel stands as the bedrock of precision and reliability in the steel construction industry in the PNW.</p>
        </div>
        <div className="flex flex-col w-1/2 justify-center sm:justify-start sm:w-1/2">
          <h4 className="relative text-2xl text-white after:absolute after:h-[3px] w-min whitespace-nowrap after:w-full after:content-[''] after:left-0 after:bottom-0 after:mt-1 after:bg-[#171157]">Contact Us</h4>
          <div className="text-white">
            <div>253-123-4567</div>
            <div>coronasteel@gmail.com</div>
            <div>Monday-Friday 9am-5pm</div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  )
}
export default Footer;
