'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 bg-white  dark:bg-darklight bg-cover text-white'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              Full Stack Developer | Video Editor | Content Creator
            </span>
          </div>
          <h1 className='text-midnight_text font-bold dark:text-white text-4xl  md:text-5xl md:leading-[1.15]'>
            Harikrishnan N
          </h1>
          <p className='text-grey dark:text-white/70 text-xl font-semibold'>
            Building Digital Experiences with Code, Creativity & Strategy
          </p>
          <div className='flex gap-3'>
            <a
              href='#about'
              className='py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
              About Me
            </a>
            <a
              href='/resume.pdf'
              download
              target='_blank'
              className='py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 px-8'>
              Resume
            </a>
          </div>
          <div className='flex items-center mt-12 gap-4'>
            <div className='flex items-center'>
              <Image
                src={getImgPath('/images/hero/harikrishnan-photo-1.jpg')}
                alt='Harikrishnan portrait'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border border-solid border-white -ml-0 object-cover'
              />
              <Image
                src={getImgPath('/images/hero/harikrishnan-photo-2.jpg')}
                alt='Harikrishnan portrait'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border border-solid border-white -ml-3 object-cover'
              />
              <Image
                src={getImgPath('/images/hero/hero-profile-3.jpg')}
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border border-solid border-white -ml-3'
              />
            </div>
            <div>
              <p className='text-sm font-normal text-grey max-w-56'>
                Connect with me on{' '}
                <Link
                  href='https://www.instagram.com/harikrishnan_._25'
                  target='_blank'
                  className='text-primary hover:text-blue-700'>
                  Instagram
                </Link>{' '}
                or{' '}
                <Link
                  href='https://www.linkedin.com/in/harikrishnan-n-833b242b7'
                  target='_blank'
                  className='text-primary hover:text-blue-700'>
                  LinkedIn
                </Link>{' '}
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 relative before:absolute before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-24 before:w-52 before:-z-10 before:translate-x-70% before:-translate-y-40% lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
          <div className='relative mx-auto h-[520px] max-w-[420px] overflow-hidden rounded-lg shadow-2xl md:h-[620px]'>
            <Image
              src={getImgPath('/images/hero/harikrishnan-photo-2.jpg')}
              alt='Harikrishnan leaning against a textured wall'
              fill
              quality={100}
              priority
              sizes='(min-width: 768px) 50vw, 100vw'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
