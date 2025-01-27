import WorkMaskGroup from "../../assets/workMaskGroup.svg"
import MainButton from "../mainButton/MainButton"
import food_1 from "../../assets/food_1.svg"
import food_2 from "../../assets/food_2.svg"
import food_3 from "../../assets/food_3.svg"
import food_4 from "../../assets/food_4.svg"
function Work() {
    return (
        <section id='work' className='grid grid-cols-[0.3622fr_0.6378fr] '>
            <div className='relative'>
                <img src={WorkMaskGroup} alt=" Work SVG" className="h-full w-full object-cover opacity-40" />
                <p className="lg:w-[17.3152rem] absolute top-10 lg:top-[10.625rem] md:left-28 lg:left-[23.875rem] text-xs md:text-[1.125rem] font-semibold text-main font-poppins ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
                </p>
                <div className="absolute top-36 md:top-[20rem] lg:top-[25.9375rem] left-2 md:left-40 lg:left-[9.6875rem] gap-[2.25rem] flex z-10">
                    <img src={food_1} alt="foods from our work" className="w-[5.421875rem] h-[4.75rem] md:w-[10.84375rem] md:h-[9.5rem] lg:w-[21.6875rem] lg:h-[19rem]" />
                    <img src={food_2} alt="foods from our work" className="w-[5.421875rem] h-[4.75rem] md:w-[10.84375rem] md:h-[9.5rem] lg:w-[21.6875rem] lg:h-[19rem]" />
                    <img src={food_3} alt="foods from our work" className="w-[5.421875rem] h-[4.75rem] md:w-[10.84375rem] md:h-[9.5rem] lg:w-[21.6875rem] lg:h-[19rem]" />
                    <img src={food_4} alt="foods from our work" className="w-[5.421875rem] h-[4.75rem] md:w-[10.84375rem] md:h-[9.5rem] lg:w-[21.6875rem] lg:h-[19rem]" />
                </div>
            </div>
            <div className='bg-main relative'>
                <h2 className="absolute top-[3.125rem] lg:w-[40.360rem] left-2 md:left-[2rem]  lg:left-[14.5625rem] text-3xl md:text-8xl lg:text-[9rem] font-extrabold text-white lg:text-last-end  uppercase font-sen">
                    How we work
                </h2>
                <div className="absolute bottom-[3.125rem] text-white left-[10.3125rem]">
                <MainButton content={"CONTACT US"}/>
                </div>
            </div>
        </section>
    )
}

export default Work
