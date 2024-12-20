import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1400px] mx-auto my-12' id="about">
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex '>
          <div className='my-auto mx-6'>
            {/* header section */}
            <h2 className='text-4xl font-bold mb-4 primary-color'>
              About Me
            </h2>
            {/* paragraph section about me */}
            <p className='text-base lg:text-lg'>
              As a web developer with a solid foundation in HTML, CSS, JAVASCRIPT,REACT and a specialization in Tailwind CSS, I have successfully contributed to numerous projects by creating intuitive and responsive websites. My expertise in leveraging Tailwind CSS allows me to efficiently implement modern design solutions that are both visually appealing and functionally robust. I am passionate about using my skills to develop user-centric websites that enhance user experience and meet client specifications.
            </p>
          </div>

        </div>
        {/* Image section for about me*/}
        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} />
      </div>
    </div>
  )
}

export default About