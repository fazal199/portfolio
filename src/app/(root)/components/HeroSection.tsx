import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import HeadingTypewriter from './HeadingTypewriter'
import Link from 'next/link'
const HeroSection = () => {
  return (
    <section className="pt-12 mobile-md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 auto-rows-auto gap-7 mobile-md:grid-cols-1 mobile-md:gap-3">
        <div className="pt-28 laptop:pt-[10vw] tablet:pt-18 mobile:pt-10">
          <h2 className="text-6xl font-bold tablet:text-4xl mobile-md:text-center mobile:tracking-wide">Hi, I&rsquo;m Fazal</h2>
          <HeadingTypewriter className=" tablet:text-xl tablet:mt-5 mobile-md:flex mobile-md:justify-center" />
          <p className="mt-8 capitalize text-xl leading-[1.8] laptop:text-lg tablet:mt-5 tablet:leading-[2.1] tablet:text-sm mobile:tracking-wider mobile-md:text-center">
            I design and create websites for business and individuals.
          </p>
          <div className="text-white flex flex-row flex-wrap gap-6 mt-8 mobile-md:justify-center">
            <Link href={"/about"}>
              <button className="font-bold text-lg tracking-[0.1em] rounded-slight py-2 px-8 border-2 border-second-medium box-normal-shadow tablet:text-sm mobile:text-xs mobile-md:text-lg mobile:px-4 mobile-sm:text-lg">
                About
              </button>
            </Link>

            <Link href={"/contact"}><Button className="tablet:text-sm mobile:text-xs mobile:px-4 mobile-md:text-lg mobile-sm:text-lg" content="Contact" /></Link>
          </div>
        </div>
        <div className='mobile-md:row-start-1 mobile-md:px-12 mobile-sm:px-4'>
          <figure className="rounded-full border-8 border-dashed border-second-medium overflow-hidden">
            <Image
              src={"/images.jpeg"}
              alt="man photo"
              height={100}
              width={100}
              className="w-full object-cover object-top"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
