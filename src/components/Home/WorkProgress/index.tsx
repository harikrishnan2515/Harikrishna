'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { skillGroups } from '@/app/api/data'
import { getImgPath } from '@/utils/image'

interface SkillGroup {
  title: string
  skills: string[]
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [skills, setSkills] = useState<SkillGroup[]>([])
  useEffect(() => {
    setSkills(skillGroups)
  }, [])

  return (
    <section
      className={`scroll-mt-25 ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}
      id='about'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 items-center gap-7'>
          <div className='md:col-span-6'>
            <Image
              src={getImgPath('/images/work-progress/progress-work.png')}
              alt='logo'
              width={375}
              height={0}
              quality={100}
              style={{ width: '100%', height: 'auto' }}
              className='md:block hidden'
            />
          </div>
          <div
            className='md:col-span-6'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                about me
              </span>
            </div>
            <h2 className='pt-9 pb-8 text-midnight_text font-bold dark:text-white text-4xl'>
              Code, cloud, content, and creative storytelling
            </h2>
            <p className='text-gray dark:text-white/70 text-base font-semibold'>
              Hi, I'm Harikrishnan - a passionate Full Stack Developer with a
              strong focus on Cloud Computing and modern web technologies. I
              enjoy transforming ideas into interactive, high-performing digital
              solutions that create real impact.
            </p>
            <p className='pt-5 text-gray dark:text-white/70 text-base font-semibold'>
              Beyond development, I am also a professional video editor with
              experience in editing multiple short films and creative content. I
              combine technical expertise with creative storytelling and digital
              marketing knowledge to build engaging digital experiences.
            </p>

            <div className='pt-8'>
              <h3 className='text-lg font-bold text-midnight_text dark:text-white'>
                Education
              </h3>
              <div className='mt-4 space-y-4 text-gray dark:text-white/70 text-sm font-semibold'>
                <div>
                  <div className='font-semibold'>B.Tech (2023 – 2027)</div>
                  <div>Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science</div>
                  <div>College: Coimbatore Institute of Engineering and Technology</div>
                  <div>CGPA: 8.00 (Current) • Expected Graduation: 2027</div>
                </div>

                <div>
                  <div className='font-semibold'>Higher Secondary Education (12th Grade)</div>
                  <div>School: Karaikudi Maharishi Vidya Mandir Matriculation Higher Secondary School</div>
                  <div>Qualification: Higher Secondary Certificate (HSC) • Percentage: 69%</div>
                </div>

                <div>
                  <div className='font-semibold'>Secondary Education (10th Grade)</div>
                  <div>School: Karaikudi Maharishi Vidya Mandir Matriculation Higher Secondary School</div>
                  <div>Qualification: Secondary School Leaving Certificate (SSLC)</div>
                </div>
              </div>
            </div>

            <div className='grid gap-7 pt-12'>
              {skills.map((item, index) => (
                <div
                  key={index}
                  className='rounded-md border border-border_color p-5 dark:border-dark_border'>
                  <h3 className='mb-4 text-lg font-bold text-midnight_text dark:text-white'>
                    {item.title}
                  </h3>
                  <div className='flex flex-wrap gap-3'>
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className='rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
