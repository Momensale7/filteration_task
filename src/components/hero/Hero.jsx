import maskGroup from "../../assets/MaskGroup.svg"
import bread from "../../assets/bread.png"
import socialGroup from "../../assets/socialGroup.svg"
import facebook from "../../assets/facebook.svg"
import vk from "../../assets/vk.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"
import MainButton from '../mainButton/MainButton'
function Hero() {
  return (
    <section id='hero' className='grid grid-cols-[0.6378fr_0.3622fr] relative h-[60vw]lg:h-screen overflow-hidden'>
        <div className='bg-main grid grid-cols-[0.29fr_0.71fr] '>
        <div className='col-start-2 text-white'>
            <div className='flex items-center w-[15.5rem] mb-[12.125rem]'>
            <div className="logo w-[3.3125rem]"></div>
            <h1 className='font-sen text-[1.75rem] font-bold uppercase'>Peachy Pup Bakery</h1>
            </div>
            <div className="mb-10">
                <h2 className='font-sen uppercase text-7xl mb-5 font-extrabold'>Tasty pastries</h2>
                <p className="font-bold lg:w-[34.5rem] w-[15.5rem]  ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            </div>
        <MainButton content={'SEE MORE'}/>
        </div>
        </div>
        <div className=''>
        <img src={maskGroup} alt="Hero SVG" className="h-full w-full object-cover opacity-40" />
        </div>
        <img src={bread} className='absolute top-[17.0625rem] left-[49.51%] w-[43.625rem] h-[25.875rem]  ' alt="" />
        <div className={`absolute z-10 bottom-0 left-0 bg-white w-[28.0625rem] h-[12.5625rem]  `}>
        <img src={socialGroup} alt="Hero SVG" className="h-full w-full object-cover opacity-40" />
        <div className="absolute top-[2.253125rem] left-[24.375rem] flex flex-col gap-y-6 items-center justify-center">
          <img src={vk} className="w-[1.2525rem] h-[0.74375rem]" alt="vk icon" />
          <img src={facebook} className="w-[1.125rem] h-[1.125rem]" alt="facebook icon" />
          <img src={instagram} className="w-[1.125rem] h-[1.125rem]" alt="instagrm icon" />
          <img src={twitter} className="w-[1.21875rem] h-[0.99rem]" alt="twitter icon" />
        </div>
        </div>
        <h3 className={`absolute z-10 bottom-[1.25rem] pl-5 left-[28.1902rem] text-[1.125rem] text-white font-bold font-poppins`}>
        Telephone:<span className="ml-[0.875rem] font-medium tracking-[0.16875rem]">+7 700 000 00 00</span>
    </h3>
    </section>
  )
}

export default Hero
