import React from "react";
import leaf from "../Assets/leaft1.jpg";
import leaf1 from "../Assets/leafhome.png";
import leaf2 from "../Assets/leaf4.png";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Image = () => {
  const fileInputRef = React.useRef(null);

  const handleCameraClick = async () => {
    try {
      const constraints = {
        video: true,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera: ", error);
    }
  };
  const animations = {
    h1: {
      initial: {
        y: "-10vh", // Move up by 10% of viewport height initially
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
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  const animations1 = {
    h1: {
      initial: {
        x: "-10%",
        opacity: 0,
      },
      whileInView: {
        x: 10,
        opacity: 1,
        transition: {
          duration: 2,
        },
      },
    },
  };
  const animations2 = {
    h1: {
      initial: {
        x: "10%",
        opacity: 0,
      },
      whileInView: {
        x: 10,
        opacity: 1,
        transition: {
          duration: 2,
        },
      },
    },
  };
  return (
    <>
      <div
        id="uploadimage"
        className="h-[100vh] w-full mt-[20vh] flex flex-col"
      >
        <motion.h1 {...animations.h1}>
          <div className="flex justify-center mt-[15vh] ">
            <Tilt option={defaultOptions}>
              <img
                src={leaf}
                alt=""
                className="hover:scale-110 transition-all  h-[35vh] w-[20vw] rounded-full "
              />
            </Tilt>
          </div>
        </motion.h1>

        <div className="flex justify-around items-center ">
          <motion.h1 {...animations1.h1}>
            <Tilt option={defaultOptions}>
              <img
                src={leaf1}
                alt=""
                className="hover:scale-110 transition-all h-[35vh] w-[20vw] rounded-full "
              />
            </Tilt>
          </motion.h1>
          <div className="bg-green-50 flex items-center justify-center p-6">
            <form class="form-container bg-green-100 border-2 border-green-500 shadow-lg p-8 rounded-lg space-y-6 text-center transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
              <div class="flex justify-center items-cente bg-green-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#183a1f"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-sprout"
                >
                  <path d="M7 20h10" />
                  <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                  <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                  <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                </svg>
              </div>
              <input
                type="file"
                accept="image/*;capture=camera"
                ref={fileInputRef}
                className="custom-file-input text-[2vh] flex flex-col justify-center items-center text-green-800 font-medium hover:-translate-y-1 border-2 border-green-700 hover:scale-105 transition-all px-6 py-3 bg-green-300 rounded-full z-10"
              />
              <div className="flex gap-7 bg-green-100">
                <button
                  type="submit"
                  className="text-[2vh] flex flex-col justify-center items-center text-green-800 font-medium hover:-translate-y-1 border-2 border-green-700 hover:scale-105 transition-all px-6 py-3 bg-green-300 rounded-full z-10"
                >
                  Upload
                </button>
                <button
                  type="button"
                  onClick={handleCameraClick}
                  className="text-[2vh] flex flex-col justify-center items-center text-green-800 font-medium hover:-translate-y-1 border-2 border-green-700 hover:scale-105 transition-all px-6 py-3 bg-green-300 rounded-full z-10"
                >
                  Open Camera
                </button>
              </div>
              <div class="flex justify-center items-center bg-green-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#183a1f"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-sprout"
                >
                  <path d="M7 20h10" />
                  <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                  <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                  <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                </svg>
              </div>
            </form>
          </div>
          <motion.h1 {...animations2.h1}>
            <Tilt option={defaultOptions}>
              <img
                src={leaf2}
                alt=""
                className="hover:scale-110 transition-all h-[35vh] w-[20vw] rounded-full "
              />
            </Tilt>
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Image;
