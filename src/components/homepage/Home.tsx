import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Class from './Class'
import Hero from './Hero'
import Shop from './Shop'

const Home = () => {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Hero />
        <Shop />
        <Class />
        <Footer />
      </div>
      <Outlet />
    </>
  )
}

export default Home