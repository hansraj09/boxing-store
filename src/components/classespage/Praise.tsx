import { ring_fight } from '../../assets'
import styles, { layout } from '../../style'

const Praise = () => {
  return (
    <section id='praise' className={`${layout.section} bg-white pl-6`}>
      <div className={`${layout.sectionInfo} px-10`}>
        <h2 className={`${styles.headingS2Black} mb-4`}>Why we are the best</h2>
        <ul className='font-cinzel text-lg space-y-8 pb-4'>
          <li>World class coaches</li>
          <li>Cutting edge training facility</li>
          <li>International Boxing Committee approved courses</li>
          <li>Direct pathway to the competitive scene</li>
          <li>Support beyond the classes</li>
          <li>Official workshops hosted on the facility by the World Champion </li>
        </ul>
			</div>
      <img src={ring_fight} alt='ring-fight' className='object-contain' />
    </section>
  )
}

export default Praise