import { man_front_gloves, ring_fight } from '../../assets'
import styles from '../../style'
import Footer from '../Footer'
import EveryoneWelcome from './EveryoneWelcome'
import Praise from './Praise'

const Classes = () => {
  return (
    <div className='flex flex-col bg-white'>
      <div className={`${styles.flexCenter} py-20 text-9xl bg-black`}>
        <h6 className='font-sedgwick font-extrabold text-white'>Classes</h6>
      </div>
      <div className='flex flex-col'>
        <div className='bg-black'>
        <img src={man_front_gloves} alt='man-standing-infront-gloves' className='w-full p-6 object-contain' />
          <p className='text-dimWhite font-cinzel text-justify'>
            <span>Join the best boxing classes in the world, taught by world class boxers </span>
            <span className='font-sedgwick'>Gojou, Baki </span>
            <span> and other amazing coaches. &nbsp; We have been in the industry for over 50 years, 
              and we show no sign of stopping anytime soon. &nbsp; We have trained over 
            </span>
            <span className='font-sedgwick'> 1000 </span>
            <span>students,
              with some competing on the world's biggest stages. &nbsp; We are the only gym in the 
              country to have trained a World Champion, so we are definitely doing something right. &nbsp; </span>
            <span className='font-semibold'>
              We have very limited spots, and they fill up quickly, so sign up today to get a chance
              to reserve your spot, or book a tour of our facility and attend a trial lesson!  
            </span>
          </p>
        </div>
        <Praise />
        <EveryoneWelcome />
        <Footer />
      </div>
    </div>
  )
}


export default Classes