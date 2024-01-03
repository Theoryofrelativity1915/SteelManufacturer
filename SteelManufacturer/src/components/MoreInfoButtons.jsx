import { NavLink } from 'react-router-dom'
import about from '../assets/scott-blake-x-ghf9LjrVg-unsplash.jpg'
import planning from '../assets/daniel-mccullough-HtBlQdxfG9k-unsplash.jpg'
import services from '../assets/sams-solutions-qsk_ifUucWE-unsplash.jpg'
import datacenter from '../assets/datacenter.jpg'
function MoreInfoButtons() {
  return (
    <div className='flex justify-center gap-6 mt-14'>
      <div className='flex flex-col'>
        <img className='h-40 w-64' src={about} />
        <h4 className='text-2xl mt-3 mb-1'>About</h4>
        <p className='w-64 text-wrap'>Corona Steel stands tall as a paramount force in the Pacific Northwest's steel construction realm...</p>
        <NavLink className='underline'>Learn more</NavLink>
      </div>
      <div className='flex flex-col'>
        <img className='h-40 w-64' src={datacenter} />
        <h4 className='text-2xl mt-3 mb-1'>Projects</h4>
        <p className='w-64 text-wrap'>We recently etched another chapter of success with the completion of a colossal warehouse data center in Oregon...</p>
        <NavLink className='underline'>Learn more</NavLink>
      </div>
      <div className='flex flex-col'>
        <img className='h-40 w-64' src={services} />
        <h4 className='text-2xl mt-3 mb-1'>Services</h4>
        <p className='w-64 text-wrap'>Our comprehensive suite of services revolves around the installation of, reinforcing, structural, and miscellaneous steel, catering to...</p>
        <NavLink className='underline'>Learn more</NavLink>
      </div>
      <div className='flex flex-col'>
        <img className='h-40 w-64' src={planning} />
        <h4 className='text-2xl mt-3 mb-1'>Planning and Projecting</h4>
        <p className='w-64 text-wrap'>Our commitment to precision begins at the genesis of every project, where our meticulous...</p>
        <NavLink className='underline'>Learn more</NavLink>
      </div>
    </div>
  )
}

export default MoreInfoButtons
