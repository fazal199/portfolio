import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Link from 'next/link'
import React from 'react'



const AboutPage = () => {
    return (
        <section className='pt-44 pb-16'>
            <Heading content={"About Us"} />

            <div className='max-w-4xl mx-auto text-xl px-3'>

                <p className=' text-xl mx-auto  mt-12 leading-[1.9] capitalize'>Hi, I&apos;m Fazal from Gujarat, India. I am Web Developer, Web Designer. I pursued BCA because of my passion for building software. I specialize in creating websites and web applications using the latest technologies like Next.js, React, and MongoDB.</p>
                <p className='   mt-12 leading-[1.9]'>Want a Website, Web Application or A Landing Page For Your Business?</p>
                <Link href={"/contact"}>  <Button content="Contact" className='mt-3' /></Link>
                <p className='mt-12 leading-[1.9]'>Here is My Email:👇</p>
                <p className='mt-2 leading-[1.9]'>workwithfazal@gmail.com</p>
            </div>
        </section>
    )
}

export default AboutPage
