import styles, { layout } from '../../style'
import Button from './Button'

const Shop = () => {
  return (
    <section id='home-shop' className={`${layout.section} bg-white text-black`}>
			<div className={layout.sectionInfo}>
				<h2>Train in confort and style</h2>
				<p>
					<span>
						The latest summer collection just launched, complete with a new line 
						of performance gloves, 
					</span>
					<span> HKV X</span>
					<span>. &nbsp; Shop now the latest releases and see the latest deals, 
						available exclusively on our online store.
					</span>
				</p>
				<Button text='Shop now' style='mt-10' />
			</div>
			<div>
				<img />
			</div>
    </section>
  )
}

// col 1 - text, shop now button
// col 2 - image, gradient, shadow, hover animation

export default Shop