import React from "react";
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascipt from "../assests/javascript.png";
import reactImage from "../assests/react.png";
import nextjs from "../assests/nextjs.png";
import nodejs from "../assests/node.png";
import express from "../assests/express.png";
import mongodb from "../assests/mongodb.png"
import tailwind from "../assests/tailwind.png";
import github from "../assests/github.png";
import reduxjs from "../assests/redux.png";
import javaImage from "../assests/java.png";

const Skills = () => {

  const tech = [
    {
      id: 1,
      src: javaImage,
      title: "Java",
      style: "shadow-blue-900",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: javascipt,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: reduxjs,
      title: "Redux",
      style: "shadow-purple-700",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 8,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-300",
    },
    {
      id: 9,
      src: express,
      title: "Express",
      style: "shadow-gray-900",
    },
    {
      id: 10,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div 
    name="skills" 
    className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-[90px]">
      <div className="max-w-screen-lg mx-auto p-4 sm:p-8 flex flex-col justify-center w-full h-screen text-white">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Skills
          </p>
        <p className="py-6">These are the technologies I've worked with</p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-6 px-10 sm:px-0">

        {
          tech.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}

            >
            <img src={src} alt="" className="w-10 mx-auto"/>
            <p className="mt-4">{title}</p>
          </div>
          ))
        }

       
      </div>
    </div>
    </div>
  );
};

export default Skills;