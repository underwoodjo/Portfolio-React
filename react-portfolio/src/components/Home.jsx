// Here we have imported react, viteLogo and TypeAnimation from react-type-animation. We downloaded the react-type-animation from npmjs.com and followed the installation instructions.We copied the <TypeAnimation /> component from usage part of the page to make the text move as seen below. Make sure to npm run dev again once installing a new package.I also added the FaGithub and FaLinkedin icons from react-icons.
import React from "react";
import viteLogo from "/vite.svg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <div className="object-centered" id="main">
      {/* For the image we have it applied to the width of the full screen, as well as the height of the screen, we also set the object-cover so that the image is not stretched */}
      {/* <img
        className="absolute "
        src="./src/images/profilephoto.jpeg"
      /> */}

      {/* For the text, it is set as absolute so that it can be positioned on the image as well set it to top 1/2 of the screen which moved it halfway up the screen. The settings are placed in the DIV so it is applied to all the children */}
      <div className="absolute top-1/4 w-full text-center text-white text-3xl>">
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-full object-cover object-center object-top h-72 w-72 me-auto ms-auto"
            height={10}
            src="./src/images/profilephoto.jpeg"
          />
          <h1 className="text-3xl mt-6">Hi, I'm Joanna</h1>
          {/* <h2 className="text-2xl">
          I'm 
        </h2> */}
          <h2 className="text-2xl">
            {/* Here we are using the react-type-animation library to make the text move across the screen */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I'm a front-end developer",
                2000, // wait 2s before replacing Web Developer with focused in frontend development
                "I'm a UX designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <SocialLinks page="Home"/>
          {/* Here we have applied the FaGithub and FaLinkedin icons, they are set to absolute so that they can be positioned on the image */}
        </div>
      </div>
    </div>
  );
};

export default Home;
