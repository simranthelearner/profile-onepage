import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 max-w-[1400px] mx-auto overflow-hidden'>
      <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4' id='skills'>
        Skills
      </h2>

      <div className='flex items-center animate-slide'>
        <div className='flex w-[100%]'>
          {/** Skill Cards */}
          {[{img: html, name: "HTML"}, {img: css, name: "CSS"}, {img: javascript, name: "JavaScript"}, {img: tailwind, name: "Tailwind"}, {img: react, name: "React"}].map((skill, index) => (
            <div key={index} className='flex flex-col items-center m-4 w-[100px]'>
              <img src={skill.img} alt={skill.name} className="w-[60px] md:w-[100px]" />
              <p className='mt-2'>{skill.name}</p>
            </div>
          ))}
        </div>

        {/** Duplicate for infinite loop */}
        <div className='flex w-[100%]'>
          {[{img: html, name: "HTML"}, {img: css, name: "CSS"}, {img: javascript, name: "JavaScript"}, {img: tailwind, name: "Tailwind"}, {img: react, name: "React"}].map((skill, index) => (
            <div key={index} className='flex flex-col items-center m-4 w-[100px]'>
              <img src={skill.img} alt={skill.name} className="w-[60px] md:w-[100px]" />
              <p className='mt-2'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;
