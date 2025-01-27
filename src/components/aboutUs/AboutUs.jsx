import MainButton from '../mainButton/MainButton'
import chief from "../../assets/chief.svg"

function AboutUs() {
    return (
        <section id='hero' className='grid grid-cols-[0.6378fr_0.3622fr] relative lg:h-screen h-[60vw] overflow-hidden'>
            <div className='bg-main grid grid-cols-[0.29fr_0.71fr] relative'>
                <div className='col-start-2 text-white '>
                    <h2 className="lg:text-[9rem] text-5xl py-5 mt-[3.125rem] w-[31.75rem] leading-[0.96] font-extrabold text-white   uppercase font-sen">
                        about us
                    </h2>
                    <p className="lg:w-[31.75rem] w-[15rem] mb-[2.625rem] mt-[3.125rem] text-[0.625rem] lg:text-[1.125rem] font-semibold text-white font-poppins ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <MainButton content={"CONTACT US"}/>
                </div>
            </div>
            <div className='bg-white'></div>
            <img src={chief} className='absolute top-[4.125rem] left-[55.123%] w-[21.3438rem] h-[22.1875rem] md:w-[42.6875rem] md:h-[44.375rem]  ' alt="" />
            

        </section>
    )
}

export default AboutUs
