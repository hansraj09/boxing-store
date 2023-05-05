import { useInView } from 'react-intersection-observer';
import { girl_training } from '../../assets'
import styles, { layout } from '../../style'

const EveryoneWelcome = () => {

  const { ref: hRef, inView: hVisible } = useInView({ triggerOnce: true });
  const { ref: ul1Ref, inView: ul1Visible } = useInView({  triggerOnce: true });
  const { ref: ul2Ref, inView: ul2Visible } = useInView({  triggerOnce: true });
  const { ref: ul3Ref, inView: ul3Visible } = useInView({  triggerOnce: true });
  const { ref: ul4Ref, inView: ul4Visible } = useInView({  triggerOnce: true });
  const { ref: ul5Ref, inView: ul5Visible } = useInView({  triggerOnce: true });
  const { ref: ul6Ref, inView: ul6Visible } = useInView({  triggerOnce: true });

  return (
    <section id='everyone-welcome' className={`${layout.section} bg-black`}>
      <img src={girl_training} alt='ring-fight' className='object-contain pr-6' />
      <div className={`${layout.sectionInfo} px-10`}>
        <h2 ref={hRef} className={`${styles.headingS2} mb-4 ${hVisible ? 'animate-slide_from_right' : ''}`}>Everyone is welcome</h2>
        <ul className='font-cinzel text-dimWhite text-lg space-y-8'>
          <li ref={ul1Ref} className={`opacity-0 ${ul1Visible ? 'animate-slide_from_left_delay' : ''}`}>No age restrictions: &nbsp; Anyone, from 10 to even 80 years can join our classes.</li>
          <li ref={ul2Ref} className={`opacity-0 ${ul2Visible ? 'animate-slide_from_left_delay' : ''}`}>No gender restrictions</li>
          <li ref={ul3Ref} className={`opacity-0 ${ul3Visible ? 'animate-slide_from_left_delay' : ''}`}>Special classes offered for children</li>
					<li ref={ul4Ref} className={`opacity-0 ${ul4Visible ? 'animate-slide_from_left_delay' : ''}`}>Special classes taught by renowned female coach Angela</li>
					<li ref={ul5Ref} className={`opacity-0 ${ul5Visible ? 'animate-slide_from_left_delay' : ''}`}>Trial sessions available for those still on the fence</li>
					<li ref={ul6Ref} className={`opacity-0 ${ul6Visible ? 'animate-slide_from_left_delay' : ''}`}>Bookings available for the facility</li>
				</ul>
			</div>
    </section>
  )
}

export default EveryoneWelcome