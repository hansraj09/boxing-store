import { ring_fight } from '../../assets'

const Praise = () => {
  return (
    <div className='flex flex-row bg-white py-12 pl-6 justify-between'>
      <div className='flex flex-col'>
        <h2 className='font-sedgwick font-medium text-6xl mb-8'>Why we are the best</h2>
        <ul className='font-cinzel text-lg space-y-8'>
          <li>World class coaches</li>
          <li>Cutting edge training facility</li>
          <li>International Boxing Committee approved courses</li>
          <li>Direct pathway to the competitive scene</li>
          <li>Support beyond the classes</li>
          <li>Official workshops hosted on the facility by the World Champion </li>
        </ul>
			</div>
      <img src={ring_fight} alt='ring-fight' />
    </div>
  )
}

export default Praise