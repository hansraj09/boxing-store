import { girl_training } from '../../assets'

const EveryoneWelcome = () => {
  return (
    <div className='flex flex-row bg-black py-12 pr-6 justify-between'>
      <img src={girl_training} alt='ring-fight' />
      <div className='flex flex-col'>
        <h2 className='font-sedgwick font-medium text-6xl mb-6 text-white'>Everyone is welcome</h2>
        <ul className='font-cinzel text-dimWhite text-lg space-y-8'>
          <li>No age restrictions</li>
          <li>No gender restrictions</li>
          <li>Special classes offered for children</li>
					<li>Special classes taught by renowned female coach Angela</li>
					<li>Trial sessions available for those still on the fence</li>
					<li>Bookings available for the facility</li>
				</ul>
			</div>
    </div>
  )
}

export default EveryoneWelcome