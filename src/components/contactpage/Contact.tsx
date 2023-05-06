import { useInView } from 'react-intersection-observer';
import styles from '../../style';
import Footer from '../Footer';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

const Contact = () => {

  const { ref: hRef, inView: hVisible } = useInView({  triggerOnce: true });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const center = {lat: 43.6425599, lng: -79.3874706};

  return (
    <div className='flex flex-col bg-white overflow-x-hidden'>
      <div className={`${styles.flexCenter} py-14 text-9xl bg-black`}>
        <h6 ref={hRef} className={`font-sedgwick font-extrabold text-white 
          ${hVisible ? 'animate-slide_from_right' : ''}`}>Contact</h6>
      </div>
      <div className="flex flex-col bg-white">
        <h3 className='flex flex-col font-sedgwick text-3xl pt-10 items-center'>
          Where to find us:
        </h3>
        {!isLoaded ?
         <div className='font-sedgwick text-lg'>Loading...</div> 
         : 
         <div className='flex flex-col items-center py-10'>
           <GoogleMap zoom={15} center={center} mapContainerClassName='w-[75%] h-[100vh]'>
            <MarkerF position={center} />
           </GoogleMap>
         </div>}
      </div>
      <div className='flex flex-col items-center py-4 bg-black'>
        <h2 className='font-sedgwick text-4xl text-white'>Contact us</h2>
        <p className='font-cinzel flex flex-col text-center text-dimWhite'>
          <span>HKV Facility</span>
          <span>1234 Champion Street,</span>
          <span>ON, Canada</span>
          <span>A1B 2C3</span>
          <span>+1 (234) 567 8987</span>
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Contact