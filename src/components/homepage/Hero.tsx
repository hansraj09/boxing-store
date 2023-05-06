import { useInView } from "react-intersection-observer";

import styles from "../../style";
import Logo from "./Logo";
import Stats from "./Stats";

const Hero = () => {

  const { ref: pRef, inView: pVisible } = useInView({ triggerOnce: true }); 

  return (
    <section id="home-hero" className={`flex md:flex-row flex-col ${styles.paddingY} bg-black text-white`}>
        <div className={`flex-1 flex-col ${styles.flexCenter}`}>
          <div className={`${styles.flexCenter} py-4`}>
            <Logo />
          </div>
          <div className={`py-14 sm:px-64 px-16 font-cinzel opacity-0 ${pVisible ? 'animate-slide_from_right' : ''}`}>
            <p ref={pRef} className={`${styles.paragraph} max-w-3xl text-justify`}>
              <span className="font-sedgwick text-2xl">HKV</span>
              <span> Gloves, a </span>
              <span className="font-sedgwick text-2xl">4x</span>
              <span> award-winning brand of quality gloves, was established in 1999. &nbsp; We are known for our iconic </span>
              <span className="font-sedgwick text-2xl">HKV1</span>
              <span>, endorsed by the 5x Boxing World Champion Saitama. &nbsp; We know a thing or two about making the best gloves
                for any occasion, be it training or crushing your opponent. &nbsp; We also offer boxing classes with world class coaches
                to forge you into a legend in the ring. &nbsp; We are here with you every step of the way on your boxing journey.
              </span>
            </p>
          </div>
          <div className="w-9/12 mt-6">
            <Stats />
          </div>
        </div>
    </section>
  )
}

export default Hero