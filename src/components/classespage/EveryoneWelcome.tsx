import { girl_training } from '../../assets'
import styles, { layout } from '../../style'

const EveryoneWelcome = () => {
  return (
    <section id='everyone-welcome' className={`${layout.section} bg-black`}>
      <img src={girl_training} alt='ring-fight' className='object-contain pr-6' />
      <div className={`${layout.sectionInfo} px-10`}>
        <h2 className={`${styles.headingS2} mb-4`}>Everyone is welcome</h2>
        <ul className='font-cinzel text-dimWhite text-lg space-y-8'>
          <li>No age restrictions: &nbsp; Anyone, from 10 to even 80 years can join our classes.</li>
          <li>No gender restrictions</li>
          <li>Special classes offered for children</li>
					<li>Special classes taught by renowned female coach Angela</li>
					<li>Trial sessions available for those still on the fence</li>
					<li>Bookings available for the facility</li>
				</ul>
			</div>
    </section>
  )
}

export default EveryoneWelcome