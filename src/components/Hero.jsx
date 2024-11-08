import { styles } from '../style';


const Hero = () => {
  return (
    <section className='relative w-full h-fit mx-auto min-h-[100vh]'>
      <div className={`${styles.paddingX} absolut inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center item-center mt-5 pt-20'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1  ml-2 sm:h-80 h-40 violet-gradient ' />
        </div>
        <div className='pt-20 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
          <div>
            <h1 className={`${styles.heroHeadText} text-white `}>Hi, I&apos;m Bildad</h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>I have different IT skills ranging from software
            development to Networking and database management.</p>
            <div className='pt-20'>
            <h1 className={styles.sectionSubText}>Gallery</h1>
            <div className='flex flex-row gap-4 '>
              
            </div>
          </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero;