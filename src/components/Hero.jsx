import { motion } from 'framer-motion';
import { styles } from '../style';
import Labat from "../assets/labat.png";

const Hero = () => {
  return (
    <section className='relative w-full h-fit mx-auto'>
      <div className={`${styles.paddingX} absolut inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center item-center mt-5 pt-20'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1  ml-2 sm:h-80 h-40 violet-gradient ' />
        </div>
        <div className='pt-20 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
          <div>
            <h1 className={`${styles.heroHeadText} text-white `}>ICT & Network Solutions Manager</h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Welcome to my professional portfolio. Explore my experience in ICT, network consulting, and project management</p>
          </div>
          <img src={Labat} alt='profile' className='rounded-md max-h-96 md:mt-40 lg:mt-40 xl:mt-40 border border-red-300 min-w-fit' />

        </div>
      </div>
    </section>
  )
}

export default Hero;