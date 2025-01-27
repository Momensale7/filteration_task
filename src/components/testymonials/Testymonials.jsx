import mask from "../../assets/testymonials.svg"
import star from "../../assets/star.svg"
import MainButton from "../mainButton/MainButton"
function Testymonials() {
    return (
        <section id="testymonials" className=" bg-main bg-no-repeat bg-center bg-cover pt-5  pb-[3.125rem]" 
        style={{backgroundImage: `url(${mask})`}}>
            <h2 className='font-sen font-extrabold text-5xl md:text-8xl lg:text-[9rem] leading-[0.96] text-white uppercase mt-[3.125rem] mb-20 text-center'>testymonials</h2>
            <div className="w-[90%] md:w-[56.437%] mx-auto mb-[3.125rem]">
                    <div className="grid grid-cols-12 gap-[3.125rem]">
                        {Array(4).fill(0).map((_,index)=>(<div key={index} className="item col-span-12 md:col-span-6 bg-white border border-main rounded-[1.875rem]">
                            <div className="px-[1.875rem] my-[2.3125rem]">
                            <h4 className="text-main font-extrabold">Kathryn Murphy</h4>
                            <p className="text-[0.875rem] mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                            <div className="flex items-center gap-x-[0.375rem]">
                                {Array(5).fill(0).map((_,index)=>(<span key={index}><img src={star} alt="star icon for rating" className="w-[1.125rem] h-[1.125rem]" /></span>
                               ))}
                            </div>
                            </div>
                        </div>))}
                       
                    </div>
                    <div className="flex items-center justify-center mt-[3.125rem] text-white">
      <MainButton content={"CONTACT US"}/>
      </div>
                  </div>
        </section>
    )
}

export default Testymonials
