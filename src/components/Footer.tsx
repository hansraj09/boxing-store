import { useInView } from 'react-intersection-observer';
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../data'
import styles from '../style'


const Footer = () => {

  const { ref: imgRef, inView: imgVisible } = useInView({  });

  return (
    <section className={`${styles.flexCenter} sm:pt-16 pt-6 pb-6 flex-col bg-white mx-4`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        <div ref={imgRef} className={`flex flex-1 flex-col justify-start ml-10 opacity-0 transition duration-1000 ${imgVisible ? 'opacity-100' : ''}`}>
          <img src={logo} alt='logo' className='object-contain w-48' />
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink, key) => (
            <div key={key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-sedgwick font-extrabold text-2xl leading-7'>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li key={index} className={`font-cinzel font-bold text-base leading-7
                    text-gray-700 hover:text-red-600 cursor-pointer`}>
                      <a href={link.link}>
                        {link.name}
                      </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row 
        flex-col pt-6 border-t-2 mt-4 border-t-slate-300'>
        <p className='font-sedgwick font-medium text-center text-xl leading-7'>
          2023 HKV Gloves. &nbsp; All Rights Reserved.
        </p>

        <div className='flex flex-row md:mt-0 mt-6 space-x-10'>
          {socialMedia.map((social) => (
            <a href={social.link}>
              <img key={social.id} src={social.icon} alt={social.id} 
                className='w-6 h-6 object-contain cursor-pointer'/>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer