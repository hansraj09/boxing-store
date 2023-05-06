import { useInView } from 'react-intersection-observer';
import { ring_fight } from '../../assets'
import styles, { layout } from '../../style'

const Praise = () => {
 
  const { ref: hRef, inView: hVisible } = useInView({ triggerOnce: true });
  const { ref: ul1Ref, inView: ul1Visible } = useInView({  triggerOnce: true });
  const { ref: ul2Ref, inView: ul2Visible } = useInView({  triggerOnce: true });
  const { ref: ul3Ref, inView: ul3Visible } = useInView({  triggerOnce: true });
  const { ref: ul4Ref, inView: ul4Visible } = useInView({  triggerOnce: true });
  const { ref: ul5Ref, inView: ul5Visible } = useInView({  triggerOnce: true });
  const { ref: ul6Ref, inView: ul6Visible } = useInView({  triggerOnce: true }); 

  return (
    <section id='praise' className={`${layout.section} bg-white pl-6`}>
      <div className={`${layout.sectionInfo} px-10`}>
        <h2 ref={hRef} className={`${styles.headingS2Black} mb-4 ${hVisible ? 'animate-slide_from_left' : ''}`}>Why we are the best</h2>
        <ul className='font-cinzel text-lg space-y-8 pb-4'>
          <li ref={ul1Ref} className={`opacity-0 ${ul1Visible ? 'animate-slide_from_right_delay' : ''}`}>World class coaches</li>
          <li ref={ul2Ref} className={`opacity-0 ${ul2Visible ? 'animate-slide_from_right_delay' : ''}`}>Cutting edge training facility</li>
          <li ref={ul3Ref} className={`opacity-0 ${ul3Visible ? 'animate-slide_from_right_delay' : ''}`}>International Boxing Committee approved courses</li>
          <li ref={ul4Ref} className={`opacity-0 ${ul4Visible ? 'animate-slide_from_right_delay' : ''}`}>Direct pathway to the competitive scene</li>
          <li ref={ul5Ref} className={`opacity-0 ${ul5Visible ? 'animate-slide_from_right_delay' : ''}`}>Support beyond the classes</li>
          <li ref={ul6Ref} className={`opacity-0 ${ul6Visible ? 'animate-slide_from_right_delay' : ''}`}>Official workshops hosted on the facility by the World Champion </li>
        </ul>
			</div>
      <img src={ring_fight} alt='ring-fight' className='object-contain md:pt-40 lg:pt-0 xl:shadow-2xl' />
    </section>
  )
}

export default Praise