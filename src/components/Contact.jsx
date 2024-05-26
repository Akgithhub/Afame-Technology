import React from "react";
import { useForm } from "react-hook-form";
import { useForm as userformer } from "@formspree/react";
import { motion } from "framer-motion";
const Contact = () => {
  const [state, handleSubmit1] = userformer("xwkgyyzj");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const animations = {
    h1: {
      initial: {
        y: "10vh", // Move up by 10% of viewport height initially
        opacity: 0,
      },
      whileInView: {
        y: 0, // Return to original position
        opacity: 1,
        transition: {
          duration: 2,
        },
      },
    },
  };
  return (
    <>
      <div id="contact" className=" flex flex-col justify-center items-center">
        <motion.h1 {...animations.h1}>
          <div className="">
            <h1 className="flex gap-2 text-[6vh] text-green-800 font-bold mb-[5vh]">
              Contact <span className="text-[#404b41]">Us</span>
            </h1>
          </div>
          <div>
            <form
              onSubmit={handleSubmit(handleSubmit1)}
              className=" flex flex-col justify-center items-center gap-6"
            >
              <input
                className=" p-4 px-[5vw] rounded-2xl bg-green-200 text-green-800 border-2 border-green-500 hover:scale-105 transition-all"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                {...register("name", {
                  required: "Please enter your name",
                })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.type === "required" && (
                <p className="">Name is required</p>
              )}
              <input
                className=" p-4 px-[5vw] rounded-2xl bg-green-200 text-green-800 border-2 border-green-500 hover:scale-105 transition-all "
                id="email"
                type="email"
                name="email"
                placeholder="Enter your Email"
                {...register("mail", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@gmail\.com$/i,
                    message: "Invalid email format or not a Gmail address",
                  },
                })}
                aria-invalid={errors.mail ? "true" : "false"}
              />

              {errors.mail && <p className="">{errors.mail.message}</p>}
              <input
                className=" p-4 px-[5vw] rounded-2xl bg-green-200 text-green-800 border-2 border-green-500 hover:scale-105 transition-all"
                type="text"
                id="message"
                name="message"
                placeholder="Enter your Message"
                {...register("Message", { required: true })}
              />
              {errors.Message && <p className="">This field is required</p>}
              <input
                type="submit"
                disabled={state.submitting}
                className="text-[3vh] flex flex-col justify-center items-center text-green-800 font-normal hover:-translate-y-9 border-2 border-green-900 hover:scale-105 transition-all mb-[5vh] px-6 bg-green-300 rounded-full p-2 mt-[4vh] z-10 hover:cursor-pointer"
              />
            </form>
          </div>
          <div className="flex justify-center items-center">
            <div className="hover:scale-125 transition-all mb-[6vh] flex flex-col justify-center items-center m-7">
              <a href="https://www.linkedin.com/in/web-devloper-amaan-khan">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="3vh"
                  width="3vw"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
              </a>
            <h1 className="hover:text-green-900 hover:scale-125 transition-all hover:font-semibold text-[2vh] font-bold text-green-800 ">
              Amaan Khan
            </h1>
            </div>
            <div className="hover:scale-125 transition-all mb-[6vh] flex flex-col justify-center items-center m-7">
              <a href="https://in.linkedin.com/in/antariksh-rajkonwar">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="3vh"
                  width="3vw"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
              </a>
            <h1 className="hover:text-green-900 hover:scale-125 transition-all hover:font-semibold text-[2vh] font-bold text-green-800 ">
              Antariksh
            </h1>
            </div>
          </div>
        </motion.h1>
      </div>
    </>
  );
};

export default Contact;
