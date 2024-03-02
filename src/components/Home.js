import React from "react";
import BoyImage from "../assests/boy.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
     
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full pt-14">
          <h2 className="text-4xl sm:text-6xl font-semibold text-white">
            Hi👋🏻, I'm Prajwal Patil
          </h2>
          <div className="typewriter-text  text-2xl sm:text-2xl font-semibold text-[#FFF7F1] pt-6">
          <Typewriter
      options={{
        strings: [
          "Full stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      className="font-white"
    />
          </div>
          <p className="text-gray-500 py-4 max-w-md">
            As a budding Full-stack web developer with a passion for Front-end development, I am driven to deliver stunning, functional websites that exceed user expectations. with a focus on user experience. If you're looking for dedicated and talented Front-end web developer who is passionate, I would love to hear from you!
          </p>

          <div>
            <Link to="projects" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 cursor-pointer">
              Project
              <span className="group-hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={BoyImage} alt="my profile" 
          className="rounded-2xl mx-auto w-2/3 md:w-[760px] md:ml-12"/>
        </div>
      </div>
    </div>
  );
};

export default Home;