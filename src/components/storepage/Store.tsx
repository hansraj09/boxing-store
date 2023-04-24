import React from 'react'
import { storeItems } from '../../data'
import Card from './Card'
import styles, { layout } from '../../style'

const Store = () => {
  return (
    <div className={`${layout.section} bg-white`}>
      <div className={`${styles.flexCenter} my-10`}>
        <h6 className='font-sedgwick font-extrabold'>The Shop</h6>
      </div>
      <div className='flex flex-row flex-wrap'>
        {storeItems.map((item, index) => (
          <div key={index}>
            <Card 
              id={item.id} 
              image={item.image} 
              title={item.title} 
              weight={item.weight} 
              color={item.color} 
              price={item.price} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Store