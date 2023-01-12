/* eslint-disable no-unused-vars */
import React from "react"
import heroImage from "../assets/heroImage.png"
import { MdKeyboardArrowRight } from "react-icons/md"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h2>I'm a Full Stack Developer</h2>
          <p>
            I have more than 1 years of experience building and designing
            softwaer. Currently, I love to work on web application using
            technologies like React, Tailwind, Sharepoint and RestAPI
          </p>

          <div>
            <button>
              Porfolio
              <span>
                <MdKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
        
        <div>
            <img src={heroImage} alt="my profile" />
        </div>
      </div>
    </div>
  )
}

export default Home
