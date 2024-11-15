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
        <div className='pt-20 mt-20 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
          <div>
            <h1 className={`${styles.heroHeadText} text-white `}>Bildad</h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A skilled IT personnel, proficient in networking, technical support, and software development.</p>
          </div>
        </div>
      </div>
      <div className='pt-20 w-content' id='gallery'>
        <h1 className={`${styles.sectionSubText} pb-10 text-center font-bold underline`}>Gallery</h1>
        <div className='[&_span]:opacity-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  place-content-between place-items-center bg-scroll backgroundImage rounded-md p-2'>
          {gallery.map((content, index) => {
            return (
              <figure className="relative max-w-sm transition-all duration-300 h-fit cursor-pointer filter grayscale hover:grayscale-0 shadow-xl shadow-blue-gray-900/50" key={index}>
                <a href="#gallery">
                  <img className="rounded-lg" src={content.imageLink} alt={`Gallery ${index+1}`} />
                </a>
                <figcaption className="absolute px-1 text-lg text-white bottom-6">
                  <h1 className='font-bold'>{content.title}</h1>
                  <p>{content.desc}</p>
                </figcaption>
              </figure>
            )

          })}
        </div>
      </div>
    </section>
  )
}

export default Hero;