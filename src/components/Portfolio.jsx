/* eslint-disable no-unused-vars */
import React from "react"
import layoutAchive from "../assets/portfolio/LayoutAchive.png"
import layoutContact from "../assets/portfolio/LayoutContact.png"
import layoutInfo from "../assets/portfolio/layoutInfo.png"
import layoutOne from "../assets/portfolio/layoutOne.png"
import layoutPhoto from "../assets/portfolio/LayoutPhoto.png"
import layoutPic from "../assets/portfolio/LayoutPic.png"

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: layoutAchive,
      demo: "https://namdo2469x.github.io/LayoutTwo/",
      code: "https://github.com/namdo2469x/LayoutTwo",
    },
    {
      id: 2,
      src: layoutContact,
      demo: "https://namdo2469x.github.io/LayoutFour/",
      code: "https://github.com/namdo2469x/LayoutFour",
    },
    {
      id: 3,
      src: layoutInfo,
      demo: "https://namdo2469x.github.io/LayoutThree/",
      code: "https://github.com/namdo2469x/LayoutThree",
    },
    {
      id: 4,
      src: layoutOne,
      demo: "https://namdo2469x.github.io/LayoutOnepage/",
      code: "https://github.com/namdo2469x/LayoutOnepage",
    },
    {
      id: 5,
      src: layoutPhoto,
      demo: "https://namdo2469x.github.io/LayoutPhotobook/",
      code: "https://github.com/namdo2469x/LayoutPhotobook",
    },
    {
      id: 6,
      src: layoutPic,
      demo: "https://namdo2469x.github.io/LayoutOne/",
      code: "https://github.com/namdo2469x/LayoutOne",
    },
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map((port) => (
            <div key={port.id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={port.src}
                alt="achive"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={port.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={port.code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
