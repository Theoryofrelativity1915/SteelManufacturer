import { MdApartment as BuildingIcon } from "react-icons/md";
import { GiIBeam as SteelIcon } from "react-icons/gi";
import { FaPencilRuler as ProfessionalIcon } from "react-icons/fa";
function ChooseUsSubsection() {
  return (
    <div className=" flex flex-col sm:flex-row justify-center mx-6 sm:mx-[20vw] gap-20 sm:gap-40 mt-12 mb-12">
      <div className="flex flex-col items-center w-full">
        <BuildingIcon className='w-8 min-h-8 bg-white rounded-full box-content p-8' />
        <h4 className="text-center text-white text-3xl m-4">30 years experience</h4>
        <p className="text-white text-xl">With over 30 years of steadfast commitment and expertise, we have honed our craft to perfection, setting the standard in the steel industry.</p>
      </div>
      <div className="flex flex-col items-center w-full">
        <SteelIcon className='bg-white w-8 min-h-8 rounded-full box-content p-8' />
        <h4 className="text-center text-white text-3xl m-4 mb-6 mt-6">The finest steel</h4>
        <p className="text-white text-xl">We meticulously source only the finest-grade steel, ensuring unparalleled quality and durability in every structure we build.</p>
      </div>
      <div className="flex flex-col items-center w-full">
        <ProfessionalIcon className='w-8 min-h-8 bg-white rounded-full box-content p-8' />
        <h4 className="text-center text-white text-3xl m-4">Professional Services</h4>
        <p className="text-white text-xl">We provide comprehensive project management, precise engineering, and seamless steel installation, guaranteeing excellence at every stage of construction.</p>
      </div>
    </div>
  )
}

export default ChooseUsSubsection
