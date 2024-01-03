import ApartmentIcon from '@mui/icons-material/Apartment';
import { GiIBeam as SteelIcon } from "react-icons/gi";
import { DesignServices as ProfessionalIcon } from '@mui/icons-material';
function ChooseUsSubsection() {
  return (
    <div className="flex justify-center mx-auto">
      <div>
        <ApartmentIcon className='bg-white rounded-full box-content p-8 scale-105' />
        <h4>Over 30 years of experience</h4>
        <p></p>
      </div>
      <div>
        <SteelIcon />
        <h4>The finest steel</h4>
        <p></p>
      </div>
      <div>
        <ProfessionalIcon />
        <h4>The finest steel</h4>
        <p></p>
      </div>
    </div>
  )
}

export default ChooseUsSubsection
