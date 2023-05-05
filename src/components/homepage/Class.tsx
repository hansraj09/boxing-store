import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { man_black_bg } from '../../assets'
import styles, { layout } from '../../style'
import Button from './Button'

const Class = () => {

  const navigate = useNavigate();
  const { ref: pRef, inView: pVisible } = useInView({ triggerOnce: true }); 
  const { ref: hRef, inView: hVisible } = useInView({ triggerOnce: true });
  
  const onClick = () => {
    navigate('/classes');
  }


  return (
    <section id='home-class' className={`${layout.section} bg-black text-white space-x-4`}>
      <div>
        <img src={man_black_bg} alt='Man boxing stance' />
      </div>
      <div className={`${layout.sectionInfo} px-12`}>
        <h2 ref={hRef} className={`${styles.heading2} ${hVisible ? 'animate-slide_from_right' : ''} opacity-0`}>Become a legend in the ring</h2>
          <p ref={pRef} className={`${styles.paragraph} mt-2 text-justify opacity-0 ${pVisible ? 'animate-slide_from_right_delay' : ''}`}>
            <span>
              Join the best boxing classes in the field, taught by world-class 
              coaches, in world-class training facilities.  We have everything,
              from heavy bags to weight machines for your hollistic development.
              &nbsp; The only requirement is a student eager to learn and to put
              in the work, so if you fit in this description, join us today! 
            </span>
          </p>
          <Button text='Enroll now' style='mt-10 mb-10' onClick={onClick} />
      </div>
    </section>
  )
}

export default Class