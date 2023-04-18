import React from 'react'
import { stats } from '../data'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`flex-row flex-wrap mb-6 ${styles.flexCenter}`}>
			{stats.map((stat) => (
				<div key={stat.id} className='flex flex-1 flex-row justify-start items-center m-3'>
					<h4 className='font-cinzel font-semibold text-3xl leading-10 text-white'>
						{stat.value}
					</h4>
					<p className='font-cinzel font-normal text-lg uppercase ml-3 red-text-gradient'>
						{stat.title}
					</p>
				</div>
			))}
    </section>
  )
}

export default Stats