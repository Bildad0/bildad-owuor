import { styles } from '../style';
import { gallery } from '../constants';


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
              <h1 className={`${styles.sectionSubText} pb-10 text-center font-bold underline`}>Gallery</h1>
              <div className='flex flex-col gap-4 justify-center alig-center sm:flex-col md:flex-row lg:flex-row xl:flex-row sm:justify-center sm:pl-20'>
                {gallery.map((content, index) => {
                  return (
                    <div className="bg-tertiary rounded-2xl sm:w-[300px] w-full h-content" key={index}>
                      <img className="w-full rounded-md shadow-lg relative h-[400px]" src={content.imageLink} alt="Britum towers" />
                      <div className="">
                        <div className="font-bold text-xl mb-2">{content.title}</div>
                        <p className="text-gray-700 text-base">
                          {content.desc}
                        </p>
                      </div>
                    </div>
                  )

                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero;