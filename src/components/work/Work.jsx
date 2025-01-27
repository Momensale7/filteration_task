import WorkMaskGroup from "../../assets/workMaskGroup.svg"
import MainButton from "../mainButton/MainButton"

function Work() {
    return (
        <section id='work' className='grid grid-cols-[0.3622fr_0.6378fr] lg:h-screen h-[70vw]'>
            <div className='relative'>
                <img src={WorkMaskGroup} alt=" Work SVG" className="h-full w-full object-cover opacity-40" />
                <p className="lg:w-[17.3152rem] absolute top-[10.625rem] left-28 lg:left-[23.875rem] text-[1.125rem] font-semibold text-main font-poppins ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                </p>
            </div>
            <div className='bg-main relative'>
                <h2 className="absolute top-[3.125rem] lg:w-[40.360rem] left-[2rem]  lg:left-[14.5625rem] text-8xl lg:text-[9rem] font-extrabold text-white lg:text-last-end  uppercase font-sen">
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
