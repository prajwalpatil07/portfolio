import React from "react";
import youtube from "../assests/projects/youtube.jpg";
import netflix from "../assests/projects/netflix.jpg";
import foodie from "../assests/projects/foodie.png";

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "NetflixGPT",
      description: "Created an online movie streaming app with some AI search Feature using ReactJS, Tailwind CSS and Gemini API, which is fully responsive for all devices to play movies seamlessly. Tech Stack:- ReactJS, Tailwind CSS, Redux-toolkit, React-router-dom, Firebase (Authentication)",
      src: netflix,
      demoLink: "https://example.com/netflix-demo",
      codeLink: "https://github.com/prajwalpatil07/netflix-gpt"
    },
    {
      id: 2,
      title: "YouTube",
      description: "Developed an Immersive video streaming platform which is highly optimised using all the latest tech used by React With Integration of Youtube API. Tech Stack:- ReactJs, Tailwind CSS, Redux-toolkit, React-router-dom.",
      src: youtube,
      demoLink: "https://example.com/youtube-demo",
      codeLink: "https://github.com/prajwalpatil07/youtube"
    },
    {
      id: 3,
      title: "Foodie",
      description: "Developed a centralized platform using React JS and Tailwind CSS to consolidate 9+ restaurants in the city, showcasing comprehensive menu details. Tech Stack:- ReactJs, Tailwind CSS, Redux-toolkit, React-router-dom",
      src: foodie,
      demoLink: "https://example.com/foodie-demo",
      codeLink: "https://github.com/yourusername/foodie"
    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, description, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt={title} className="rounded-md duration-200 hover:scale-105" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex justify-center space-x-4">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white rounded-md hover:bg-blue-600">Demo</a>
                  <a href={codeLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-rose-100 to-teal-100 text-black rounded-md hover:bg-gray-800">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
