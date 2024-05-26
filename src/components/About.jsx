import React from "react";
import leaf from "../Assets/leaf.gif";

const About = () => {
  return (
    <>
      <div id="about" className="h-auto  w-full flex  flex-col gap-y-16 ">
        <div className="flex justify-center items-center flex-col gap-8">
          <h1 className="text-[4vh] text-green-800 font-bold ">
            Leafy: Your Plant Identification Companion
          </h1>
          <img src={leaf} alt="" className="h-[30vh] w-[15vw] " />
        </div>
        <div className="flex justify-start items-center flex-col  ">
          <h1 className="text-[4vh] text-green-800 font-bold ">How It Works</h1>
          <ol
            style={{
              listStyle: "dotted",
            }}
            className="text-[2vh] text-green-600 font-semibold ml-[2vw] mt-[10vh] border-dotted border-2 border-green-500 rounded-2xl p-7 "
          >
            <li>
              {" "}
              <strong>C</strong>apture: Take a clear photo of the plant you'd
              like to identify.
            </li>
            <br />
            <li>
              <strong> U</strong>pload: Use our intuitive interface to upload
              your image to Leafy.
            </li>{" "}
            <br />
            <li>
              {" "}
              <strong>I</strong>dentify: Our advanced AI analyzes the image and
              identifies the plant species.
            </li>{" "}
            <br />{" "}
            <li>
              <strong>L</strong>earn: Get detailed information about the plant,
              including its common name, scientific name, habitat, and
              interesting facts.
            </li>{" "}
            <br />
            <li>
              <strong>F</strong>eatures Instant Identification: Our machine
              learning model quickly processes your images to identify plant
              species accurately.
            </li>
            <br />
            <li>
              <strong>C</strong>omprehensive Database: Access detailed
              information on a wide range of plant species, from common garden
              plants to rare and endangered species.
            </li>
            <br />
            <li>
              <strong>U</strong>ser-Friendly Interface: Enjoy a smooth and
              intuitive experience on both desktop and mobile devices.
              Educational Resources: Learn about plant biology, ecology, and
              conservation efforts through our extensive resources and articles.
            </li>
          </ol>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[4vh] text-green-800 font-bold ">
            Join the Leafy Community
          </h1>
          <p className="tex-[2vh] text-green-700 font-semibold w-[50vw] mt-8 ">
            Become part of a growing community of nature enthusiasts, botanists,
            and conservationists. Share your discoveries, participate in
            discussions, and contribute to our ever-expanding database of plant
            knowledge. Follow us on social media and stay updated with the
            latest news, tips, and discoveries in the world of plants.
          </p>
        </div>
        <div className="flex justify-center items-center gap-y-9 flex-col mt-[10vh] mb-[20vh]">
          <h1 className="text-[4vh] text-green-800 font-bold ">
            Why Choose Leafy?
          </h1>
          <p className="text-[2vh] font-semibold text-green-600 ">
            <li>
              {" "}
              <strong>A</strong>ccuracy: Our machine learning model is trained
              on a vast dataset to ensure high accuracy in plant identification.
            </li>
            <br />
            <li>
              <strong> C</strong>onvenience: Easily accessible from any device
              with an internet connection. Engagement: Interactive and engaging
              platform designed for users of all ages and knowledge levels.{" "}
            </li>{" "}
            <br />{" "}
            <li>
              <strong>E</strong>ducational: Enhance your understanding of plant
              species and their importance in our ecosystem.
            </li>
            <br />
            <li>
              <strong>G</strong>et Started Ready to embark on your botanical
              adventure? Simply click the button below to start identifying
              plants with Leafy!
            </li>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
