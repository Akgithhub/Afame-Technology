import React from "react";
import leaf from "../Assets/leaf4.png";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const Home = () => {
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
  const animations = {
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
  const animations1 = {
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
  const animations3 = {
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
      <div id="home" className="home w-full h-[80vh] flex flex-col ">
        <div className="flex justify-center items-center gap-9 mt-[15vh]">
          <motion.h1 {...animations.h1}>
            <>
              <div className="text-green-600 text-[2vh] w-[50vw]">
                <h1 className="text-[4vh] text-green-800 font-bold">
                  <strong>
                    Welcome to Leafy: Your Plant Identification Companion
                  </strong>
                </h1>
                <p className="font-semibold">
                  Discover the incredible biodiversity around you with Leafy.
                  Whether you're exploring a heritage site, hiking in nature, or
                  simply wandering through your backyard, Leafy helps you
                  identify and learn about the plants you encounter. Our
                  user-friendly web application leverages cutting-edge machine
                  learning technology to provide instant information about the
                  flora you discover. Capture, upload, and explore the natural
                  world with Leafy!
                </p>
              </div>
            </>
          </motion.h1>
          <motion.h1 {...animations1.h1}>
            <>
              <Tilt option={defaultOptions}>
                <img
                  src={leaf}
                  alt="Leaf"
                  className="hover:scale-110 transition-all h-[40vh] w-[30vw] rounded-full "
                />
              </Tilt>
            </>
          </motion.h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex  w-[50vw] flex-col justify-center items-center gap-6 mt-[7vh]">
            <motion.h1 {...animations3.h1}>
              <>
                <h1 className="text-[4vh] text-green-800 font-bold">
                  Explore Heritage Sites with Leafy
                </h1>
                <p className="text-green-600 text-[2vh] font-semibold">
                  Heritage sites are home to unique and diverse plant species
                  that tell the story of our natural and cultural history. Use
                  Leafy to enhance your visits to these sites by discovering the
                  plants that thrive in these special places. Understand the
                  ecological significance of these plants and their roles in
                  maintaining the balance of our environment.
                </p>
              </>
            </motion.h1>{" "}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a href="#uploadimage">
            <button className="text-[3vh] flex flex-col justify-center items-center text-green-800 font-normal hover:-translate-y-9 border-2 border-green-900 hover:scale-105 transition-all mb-[20vh] px-6 bg-green-300 rounded-full p-2 mt-[8vh] z-10 ]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#166534"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-leaf"
                className="bg-[#86efac] font-semibold"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              Get Started
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
