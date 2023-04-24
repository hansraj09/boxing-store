import React from 'react'
import { storeItems } from '../../data'
import Card from './Card'
import styles, { layout } from '../../style'

const Store = () => {
  return (
    <div className={`flex flex-col bg-white`}>
      <div className={`${styles.flexCenter} my-20 text-9xl`}>
        <h6 className='font-sedgwick font-extrabold'>The Shop</h6>
      </div>
      <div className='flex flex-row flex-wrap justify-between gap-4 mx-6'>
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