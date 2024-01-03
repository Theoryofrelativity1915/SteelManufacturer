import ChooseUsSubsection from './ChooseUsSubsection'

export const ChooseUs = () => {
  return (
    <div className='flex-col sm:flex justify-center mx-auto text-center mt-20 bg-gray-700'>
      <h4 className='text-4xl m-2 text-white mt-8'>Why choose Corona Steel?</h4>
      <p className='text-white m-4'>Founded by John Paulson back in 1991, Corona Steel has established itself as one of the leaders of the steel erection industry.</p>
      <ChooseUsSubsection />
    </div>
  )
}
