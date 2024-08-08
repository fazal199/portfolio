"use client"
import React from 'react'
import TypeWriterText from 'typewriter-effect'


const HeadingTypewriter = ({className}:any) => {
  return (
    <div className={`text-3xl font-bold mt-8 text-white ${className}`}><span className='inline-block'>I am a</span>
        <TypeWriterText options={{
          strings: ['Web Developer!', 'Web Designer!'],
          autoStart: true,
          loop: true,
          wrapperClassName: "text-second-medium",
        }} />
    </div>
  )
}

export default HeadingTypewriter
