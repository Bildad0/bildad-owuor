import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolut inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center item-center mt-5 pt-20'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1  ml-2 sm:h-80 h-40 violet-gradient ' />
        </div>
        <div className='pt-20'>
          <h1 className={`${styles.heroHeadText} text-white `}>Hi, I'm <span className='text-[#915eff]'>Bildad </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I have different IT skills ranging from software <br className='sm:block hidden' /> development to Networking and database management.</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full  flex justify-center items-center '>
        <a href='#about'>
          <div
            className='w-[35px] 
          h-[64px] 
          rounded-3xl 
          border-4 border-secondary 
          flex justify-center 
          items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 bg-secondary mb-1 rounded-full'
            />
          </div>

        </a>

      </div>
    </section>
  )
}

export default Hero;