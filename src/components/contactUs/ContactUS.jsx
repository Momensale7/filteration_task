import mailIcon from "../../assets/ic_round-mail.svg"
import phoneIcon from "../../assets/ic_round-call.svg"
import { useFormik } from "formik";
import * as Yup from "yup"
import toast from "react-hot-toast";
import axios from "axios";
function ContactUS() {
    const validationSchema = Yup.object({
        name:Yup.string().matches(/^[a-zA-Z\s]{4,29}$/,"name must be greater than 3 and less than 30 character").required("name number is required"),
        email: Yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "enter a valid email").required("Email is required"),
        phone: Yup.string().matches(/^(010|012|011|015)\d{8}$/,"enter egyption phone number").required("phone number is required"),
      })
      const formik = useFormik({
        initialValues: {
          "name": "",
          "email": "",
          "phone":"",
        },
        onSubmit: sendMessage,
        validationSchema
      })
      async function sendMessage() {
        try {
          await axios.post("http://upskilling-egypt.com:3001/contact", formik.values)
          console.log(formik.values);
          toast.success("Message sent!");
          formik.resetForm();
        } catch (error) {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again later.");
        }
      }
    return (
        <section id='contactUs' className='pt-5'>
            <h2 className='font-sen font-extrabold text-5xl md:text-8xl lg:text-[9rem] leading-[0.96] text-main uppercase mt-[3.625rem] mb-[3.125rem] text-center'>contac us</h2>
            <div className=" lg:ms-[38.875rem] flex items-center flex-col lg:flex-row">
            <form action="" onSubmit={formik.handleSubmit} className="w-[23.375rem] flex flex-col justify-center gap-y-[0.875rem]">
            <div>
            <input value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="name" id="name" placeholder="Full Name" className="bg-inputColor text-inputTextColor text-[0.875rem] ps-[1.625rem] rounded-[3.8125rem] py-[1.75rem] block w-full placeholder:ms-1 placeholder:font-bold placeholder:text-inputTextColor " />
            {formik.errors.name && formik.touched.name && <p className='text-red-300 p-1 rounded-md text-xs '>{formik.errors.name}</p>}
            </div>
            <div>
            <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}  type="email" name="email" id="email" placeholder="Email" className="bg-inputColor text-inputTextColor text-[0.875rem] ps-[1.625rem] rounded-[3.8125rem] py-[1.75rem] block w-full placeholder:ms-1 placeholder:font-bold placeholder:text-inputTextColor " />
            {formik.errors.email && formik.touched.email && <p className='text-red-300 p-1 rounded-md text-xs '>{formik.errors.email}</p>}
            </div>
            <div>
            <input value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" name="phone" id="phone" placeholder="Phone Number" className="bg-inputColor text-inputTextColor text-[0.875rem] ps-[1.625rem] rounded-[3.8125rem] py-[1.75rem] block w-full placeholder:ms-1 placeholder:font-bold placeholder:text-inputTextColor " />
            {formik.errors.phone && formik.touched.phone && <p className='text-red-300 p-1 rounded-md text-xs '>{formik.errors.phone}</p>}
            </div>
            <button className="text-[1.125rem] rounded-[3.8125rem] w-[10.5rem] font-sen h-[3.5rem] border font-extrabold border-main m-auto block text-center">
                send
            </button>
            </form>
            <div className=" h-[4.875rem] mt-10 lg:mt-0  lg:ml-[7.3125rem]">
                <p className="text-[0.875rem] text-[#333] mb-8 flex items-center"><img src={mailIcon} alt="mail icon" className="w-[1.5rem] h-[1.5rem] me-[1.25rem]"/>upskilling.eg1@gmail.com</p>
                <p className="text-[0.875rem] text-[#333] flex items-center"><img src={phoneIcon} alt="phone icon" className="w-[1.5rem] h-[1.5rem] me-[1.25rem]"/>+20 115 493 2137</p>
            </div>
            </div>
        </section>
    )
}

export default ContactUS
