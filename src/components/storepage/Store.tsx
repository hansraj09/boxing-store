import { storeItems } from '../../data'
import Card from './Card'
import styles from '../../style'
import Footer from '../Footer'

const Store = () => {
  return (
    <div className={`flex flex-col bg-white`}>
      <div className={`${styles.flexCenter} py-20 text-9xl bg-black`}>
        <h6 className='font-sedgwick font-extrabold text-white'>The Shop</h6>
      </div>
      <div className='flex flex-row flex-wrap justify-between gap-4 mx-6 py-6'>
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
      <div className='py-10 bg-black'>
        <h2 className='font-cinzel font-semibold text-lg text-center text-white'>
          Showing {storeItems.length} out of {storeItems.length} products
        </h2>
      </div>
      <div className='border-t-2 border-black'>
        <Footer />
      </div>
    </div>
  )
}

export default Store