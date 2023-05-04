import { useInView } from "react-intersection-observer";

import { red_gloves } from '../../assets'
import styles, { layout } from '../../style'
import Button from './Button'

const Shop = () => {

  const { ref: pRef, inView: pVisible } = useInView({ triggerOnce: true }); 
  const { ref: hRef, inView: hVisible } = useInView({ triggerOnce: true }); 


  return (
    <section id='home-shop' className={`${layout.section} bg-white text-black space-x-6`}>
			<div className={`${layout.sectionInfo} px-12`}>
				<h2 ref={hRef} className={`${styles.heading2Black} ${hVisible ? 'animate-slide_from_left' : ''}`}>Train in comfort and style</h2>
				<p ref={pRef} className={`${styles.paragraphBlack} mt-2 text-justify opacity-0 ${pVisible ? 'animate-slide_from_left_delay' : ''}`}>
					<span>
						The latest summer collection just launched, complete with a new line 
						of performance gloves, 
					</span>
					<span className='font-sedgwick font-extrabold text-2xl'> HKV X</span>
					<span>. &nbsp; Shop now the latest releases and see the latest deals, 
						available exclusively on our online store.
					</span>
				</p>
				<Button text='Shop now' style='mt-10 mb-10' />
			</div>
			<div className=''>
				<img src={red_gloves} alt='Red Gloves' />
			</div>
    </section>
  )
}

// col 2 - image, gradient, shadow, hover animation (glow animation)
// glow effect on HKV X, clicking on it takes you to the product in shop

export default Shop