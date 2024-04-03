import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
        As a recent Bachelor of Engineering graduate with a focus in Computer Science and Engineering (2023). I am enthusiastic about the opportunity to contribute and grow as a professional in the field of full stack development. 
        Throughout my academic journey and personal projects, I have acquired a solid foundation in web development technologies including HTML, CSS, JavaScript and TypeScript. 
        Moreover, I have gained practical experience in building dynamic and responsive web applications using frameworks such as ReactJS, NextJS and Redux. 
        My proficiency extends to backend development as well, where I have worked extensively with Node.js and Express.js to create robust server-side applications, along with utilizing MongoDB and MySQL for database management.
        </p>
                
      </div>
    </div>
  );
};

export default About;