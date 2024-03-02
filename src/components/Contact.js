import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 pt-40 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact Me</p>
        </div>
        {/* <div className="flex justify-center items-center text-4xl pt-4 font-semibold">Prajwal Patil</div>
        <p className="flex justify-center items-center mt-2">Full stack Developer</p> */}
        <div className="mt-8">
          <a href="mailto:prajwalgpatil@gmail.com" className="flex items-center">
          <HiOutlineMail size={38}/> <span className="ml-2">Email</span>
          </a>
        <p className="ml-[46px] mt-1">prajwalgpatil@gmail.com</p>  
        
          <div className="flex items-center mt-4"> <SlLocationPin size={38}/><span className="ml-2">Location</span></div>
          <p className="ml-[46px] mt-1">Amravati, Maharashtra</p>
        </div>
        <div className="mt-28 pt-10">
        <div className="flex justify-center items-center space-x-6 mt-8">
        <a href="https://www.twitter.com/prajwalstwt" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={28} />
            </a>
          <a href="https://www.linkedin.com/in/prajwal-patil-a56a9b27b/" target="_blank" rel="noopener noreferrer">
            <SlSocialLinkedin size={28} />
          </a>
          <a href="https://github.com/prajwalpatil07" target="_blank" rel="noopener noreferrer">
           <VscGithubAlt size={32}/>

          </a>
        </div>
        <div className="text-center text-gray-500 mt-30 py-2">
          <p>&copy; Prajwal Patil | All rights reserved | {new Date().getFullYear()} </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
