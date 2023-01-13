/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
import React from "react"

import html from "../assets/html.png"
import css from "../assets/html.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import typescript from "../assets/typescript.png"
import restapi from "../assets/restapi.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-700",
    },
    {
      id: 7,
      src: restapi,
      title: "RestApi",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ]

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 items-center text-center py-8 px-12 sm:px-0">
          {tech.map((item) => (
            <div key={item.id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg" + " " + item.style}>
              <img src={item.src} alt="html" className="w-20 mx-auto" />
              <p className="mt-4">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
