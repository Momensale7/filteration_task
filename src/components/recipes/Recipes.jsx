import test from "../../assets/test.png"
import MainButton from "../mainButton/MainButton"
function Recipes() {
  return (
    <section className='pt-5'>
      <h2 className='font-sen font-extrabold text-5xl md:text-8xl lg:text-[9rem] leading-[0.96] text-main uppercase mt-[3.625rem] mb-[3.125rem] text-center'>recipes</h2>
      <div className="w-[63.006%] mx-auto mb-[3.125rem]">
        <div className="grid grid-cols-12 gap-x-[1.375rem]">
            <div className="item col-span-4 bg-white border border-main rounded-[1.875rem]">
                <img src={test} className="w-full h-[17.8125rem] rounded-[1.875rem]"  alt="" />
                <div className="px-[1.875rem] my-[2.3125rem]">
                <h4 className="text-main font-extrabold">lorem</h4>
                <p className="text-[0.875rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, eos deserunt, veritatis est facilis sint sed non fugiat aperiam cupiditate nemo officia, saepe excepturi molestias dicta sapiente? Eius, perspiciatis ipsam.</p>
                </div>
            </div>
          
           
        </div>
      </div>
      <div className="flex items-center justify-center mb-[3.125rem]">
      <MainButton content={"CONTACT US"}/>
      </div>
    </section>
  )
}

export default Recipes
