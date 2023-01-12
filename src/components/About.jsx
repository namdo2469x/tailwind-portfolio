import React from "react"

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          Hi, my name is Nam Do, you can call me Nam. Im 24 years old. I am
          currently working as a frontend developer at CMC global. I have more
          than one years of experience in developing frontend applications. My
          main languages are HTML, CSS, JavaScript. As a frontend developer, i
          am familiar with ReactJS and Sharepoint framework.
        </p>
        <br />

        <p className="text-xl">
          My lastest project is "Hyster". This project is about marketing
          purpose for folk lift truck, transportation service of a company. Team
          size of this project is 7 member. In this project, I work as a
          front-end developer. My responsibility is design monitors, call API
          and handle business logic screen.
        </p>
      </div>
    </div>
  )
}

export default About
