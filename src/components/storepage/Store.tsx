import { storeItems } from '../../data'
import Card from './Card'
import styles from '../../style'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

const Store = () => {

  const { ref: h1Ref, inView: h1Visible } = useInView({ triggerOnce: true });
  const { ref: h2Ref, inView: h2Visible } = useInView({ triggerOnce: true });

  return (
    <>
      <div className={`flex flex-col bg-white overflow-x-hidden`}>
        <div className={`${styles.flexCenter} py-20 xs:text-9xl text-7xl bg-black`}>
          <h6 ref={h1Ref} className={`font-sedgwick font-extrabold text-white ${h1Visible ? 'animate-slide_from_right' : ''}`}>The Shop</h6>
        </div>
        <div className='flex flex-row flex-wrap sm:justify-between justify-center gap-4 mx-6 py-6'>
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
          <h2 ref={h2Ref} className={`font-cinzel font-semibold text-lg text-center text-white ${h2Visible ? 'animate-slide_from_right' : ''}`}>
            Showing {storeItems.length} out of {storeItems.length} products
          </h2>
        </div>
        <div className='border-t-2 border-black'>
          <Footer />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Store