
function ContactUS() {
    return (
        <section id='contactUs' className='pt-5'>
            <h2 className='font-sen font-extrabold text-5xl md:text-8xl lg:text-[9rem] leading-[0.96] text-main uppercase mt-[3.625rem] mb-[3.125rem] text-center'>contac us</h2>
            <div className="w-[42.3152rem] ms-[38.875rem] flex items-center">
            <form action="" className="w-[23.375rem] flex flex-col justify-center gap-y-[0.875rem]">
            <div>
            <input type="text" name="name" id="name" placeholder="Full Name" className="bg-inputColor text-inputTextColor text-[0.875rem] ps-[1.625rem] rounded-[3.8125rem] py-[1.75rem] block w-full placeholder:ms-1 placeholder:font-bold placeholder:text-inputTextColor " />
            </div>
            <div>
            <input type="email" name="email" id="name" placeholder="Email" className="bg-inputColor text-inputTextColor text-[0.875rem] ps-[1.625rem] rounded-[3.8125rem] py-[1.75rem] block w-full placeholder:ms-1 placeholder:font-bold placeholder:text-inputTextColor " />
            </div>
            <div>
            <input type="text" name="tel" id="phone" placeholder="Phone Number" className="bg-inputColor text-inputTextColor text-[0.875rem] ps-[1.625rem] rounded-[3.8125rem] py-[1.75rem] block w-full placeholder:ms-1 placeholder:font-bold placeholder:text-inputTextColor " />
            </div>
            </form>
            </div>
        </section>
    )
}

export default ContactUS
