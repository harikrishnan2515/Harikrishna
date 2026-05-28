'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { getImgPath } from '@/utils/image'
import { useEffect, useState } from 'react'
import Education from '../Home/Education'

const technicalSkills = [
  'C',
  'Python',
  'Java',
  'MySQL',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'MongoDB',
]

const expertise = [
  'Cloud Computing',
  'Video Editing',
  'Content Creation',
  'Digital Marketing',
]

const softSkills = ['Time Management', 'Leadership Quality']

const socialLinks = {
  instagram: 'https://www.instagram.com/harikrishnan_._25',
  linkedin: 'https://www.linkedin.com/in/harikrishnan-n-833b242b7',
  github: 'https://github.com/harikrishnan2515',
  email: 'mailto:harikrishnan@example.com',
}

const heroPortrait = '/images/hero/harikrishnan-hero.jpg'

const services = [
  {
    icon: 'solar:code-square-bold-duotone',
    title: 'Full Stack Development',
    description:
      'Building responsive, scalable and modern web applications using React, JavaScript, MongoDB and cloud technologies.',
  },
  {
    icon: 'solar:video-frame-play-horizontal-bold-duotone',
    title: 'Video Editing',
    description:
      'Professional short film editing, cinematic reels, storytelling edits and social media content creation.',
  },
  {
    icon: 'solar:chart-2-bold-duotone',
    title: 'Digital Marketing',
    description:
      'Helping brands grow through creative marketing strategies and audience engagement.',
  },
]

const projects = [
  {
    title: 'Algorithm Literacy and Predictive Modeling',
    icon: 'solar:health-bold-duotone',
    metric: 'AI Health',
    image: '/images/portfolio/mars.png',
    description:
      'A human-centered forecasting concept for understanding patient health outcomes through explainable predictive modeling.',
  },
  {
    title: 'Smart Waste Collection & Routing System',
    icon: 'solar:routing-3-bold-duotone',
    metric: 'Smart City',
    image: '/images/portfolio/roket-squred.png',
    description:
      'An intelligent routing system concept for improving waste collection efficiency with optimized pickup paths.',
  },
  {
    title: 'Blockchain Based Voting System',
    icon: 'solar:shield-check-bold-duotone',
    metric: 'Secure Vote',
    image: '/images/portfolio/cozycasa.png',
    description:
      'A secure voting workflow concept focused on transparency, tamper resistance, and trust through blockchain architecture.',
  },
]

const experience = [
  {
    role: 'Freelance Full Stack Developer',
    period: '2024 - Present',
    description:
      'Developing responsive websites and modern applications using React, JavaScript and MongoDB.',
  },
  {
    role: 'Professional Video Editor',
    period: 'Creative Projects',
    description:
      'Worked on cinematic short films, reels and promotional content projects.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const SkillCard = ({
  title,
  skills,
}: {
  title: string
  skills: string[]
}) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -8, scale: 1.01 }}
    className='rounded-2xl border border-[#38bdf8]/25 bg-white/[0.045] p-6 shadow-[0_0_60px_rgba(56,189,248,0.08)] backdrop-blur-xl transition-colors hover:border-[#a78bfa]/60'>
    <h3 className='mb-5 text-xl font-semibold text-[#e0f2fe]'>{title}</h3>
    <div className='flex flex-wrap gap-3'>
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03 }}
          className='rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-2 text-sm font-medium text-[#dbeafe] shadow-[0_0_22px_rgba(56,189,248,0.12)]'>
          {skill}
        </motion.span>
      ))}
    </div>
    <div className='mt-6 h-1.5 overflow-hidden rounded-full bg-white/10'>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${Math.min(96, 62 + skills.length * 4)}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className='h-full rounded-full bg-gradient-to-r from-[#0e7490] via-[#a78bfa] to-[#c4b5fd]'
      />
    </div>
  </motion.div>
)

const ProjectVisual = ({
  icon,
  metric,
  image,
}: {
  icon: string
  metric: string
  image: string
}) => (
  <div className='relative mb-7 h-44 overflow-hidden rounded-2xl border border-[#38bdf8]/20 bg-black/10 p-5'>
    <Image
      src={getImgPath(image)}
      alt={`${metric} preview`}
      fill
      className='absolute inset-0 object-cover opacity-30'
      priority
    />
    <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent' />
    <div className='absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#38bdf8]/20 blur-2xl' />
    <div className='absolute bottom-5 left-5 right-5 grid grid-cols-4 gap-2 opacity-70'>
      {[42, 70, 52, 86].map((height, index) => (
        <motion.span
          key={index}
          initial={{ height: 10 }}
          whileInView={{ height }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12, duration: 0.8 }}
          className='self-end rounded-t-lg bg-gradient-to-t from-[#38bdf8]/35 to-[#c4b5fd]'
        />
      ))}
    </div>
    <div className='relative z-10 flex items-start justify-between'>
      <div className='grid h-16 w-16 place-items-center rounded-2xl bg-black/45 text-[#dbeafe] shadow-[0_0_35px_rgba(56,189,248,0.2)] backdrop-blur-xl'>
        <Icon icon={icon} width={34} />
      </div>
      <span className='rounded-full border border-[#38bdf8]/25 bg-black/35 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#dbeafe]'>
        {metric}
      </span>
    </div>
  </div>
)

const PremiumPortfolio = () => {
  const [cursor, setCursor] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <main className='min-h-screen overflow-hidden bg-[#030303] text-white'>
      <motion.div
        animate={{ x: cursor.x - 18, y: cursor.y - 18 }}
        transition={{ type: 'spring', stiffness: 180, damping: 24 }}
        className='pointer-events-none fixed left-0 top-0 z-50 hidden h-9 w-9 rounded-full border border-[#a78bfa]/45 shadow-[0_0_35px_rgba(167,139,250,0.35)] md:block'
      />
      <div className='fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(167,139,250,0.18),transparent_30%),radial-gradient(circle_at_85%_5%,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,#040404,#050816_45%,#020202)]' />
      <div className='pointer-events-none fixed inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px]' />

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, pointerEvents: 'none' }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className='fixed inset-0 z-50 grid place-items-center bg-[#030303]'>
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className='h-20 w-20 rounded-full border border-[#a78bfa]/30 shadow-[0_0_70px_rgba(167,139,250,0.45)]'>
          <div className='m-auto mt-3 h-14 w-14 rounded-full bg-gradient-to-br from-[#c4b5fd] via-[#38bdf8] to-[#312e81]' />
        </motion.div>
      </motion.div>

      <nav className='fixed left-0 right-0 top-0 z-40 border-b border-[#38bdf8]/10 bg-black/45 backdrop-blur-xl'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-5 py-4'>
          <Link
            href='#home'
            className='text-xl font-bold tracking-wide text-[#dbeafe]'>
            Harikrishnan N
          </Link>
          <div className='hidden items-center gap-7 text-sm text-white/70 md:flex'>
            {[
              'About',
              'Education',
              'Skills',
              'Services',
              'Projects',
              'Experience',
              'Contact',
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className='transition hover:text-[#a78bfa]'>
                {item}
              </Link>
            ))}
          </div>
          <a
            href='/resume.pdf'
            download
            target='_blank'
            className='rounded-full border border-[#38bdf8]/40 px-5 py-2 text-sm font-semibold text-[#dbeafe] shadow-[0_0_28px_rgba(56,189,248,0.16)] transition hover:bg-[#38bdf8]/15'>
            Resume
          </a>
        </div>
      </nav>

      <section
        id='home'
        className='relative flex min-h-screen items-center px-5 pb-16 pt-32'>
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(18)].map((_, index) => (
            <motion.span
              key={index}
              animate={{
                y: [-20, -120, -20],
                opacity: [0.12, 0.55, 0.12],
              }}
              transition={{
                duration: 6 + (index % 5),
                repeat: Infinity,
                delay: index * 0.35,
              }}
              className='absolute h-1 w-1 rounded-full bg-[#a78bfa]'
              style={{
                left: `${(index * 17) % 100}%`,
                top: `${18 + ((index * 23) % 70)}%`,
              }}
            />
          ))}
        </div>

        <div className='mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1.05fr_0.95fr]'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={stagger}
            className='relative z-10'>
            <motion.p
              variants={fadeUp}
              className='mb-5 inline-flex rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-2 text-sm font-semibold text-[#dbeafe] shadow-[0_0_35px_rgba(56,189,248,0.12)]'>
              Full Stack Developer | Video Editor | Content Creator
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className='max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl'>
              Harikrishnan N
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className='mt-7 max-w-2xl text-xl leading-8 text-white/72'>
              Building Digital Experiences with Code, Creativity & Strategy
            </motion.p>
            <motion.div variants={fadeUp} className='mt-10 flex flex-wrap gap-4'>
              <Link
                href='#projects'
                className='rounded-full bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#c4b5fd] px-7 py-3 font-bold text-black shadow-[0_0_42px_rgba(167,139,250,0.35)] transition hover:scale-105'>
                View Projects
              </Link>
              <Link
                href='#contact'
                className='rounded-full border border-[#a78bfa]/45 px-7 py-3 font-bold text-[#dbeafe] transition hover:bg-[#38bdf8]/15 hover:shadow-[0_0_32px_rgba(167,139,250,0.24)]'>
                Contact Me
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className='mt-9 flex gap-4'>
              <Link
                href={socialLinks.instagram}
                target='_blank'
                aria-label='Instagram'
                className='grid h-12 w-12 place-items-center rounded-full border border-[#38bdf8]/30 bg-white/5 text-[#dbeafe] transition hover:-translate-y-1 hover:border-[#a78bfa] hover:bg-[#38bdf8]/15'>
                <Icon icon='mdi:instagram' width={23} />
              </Link>
              <Link
                href={socialLinks.linkedin}
                target='_blank'
                aria-label='LinkedIn'
                className='grid h-12 w-12 place-items-center rounded-full border border-[#38bdf8]/30 bg-white/5 text-[#dbeafe] transition hover:-translate-y-1 hover:border-[#a78bfa] hover:bg-[#38bdf8]/15'>
                <Icon icon='mdi:linkedin' width={23} />
              </Link>
              <Link
                href={socialLinks.github}
                target='_blank'
                aria-label='GitHub'
                className='grid h-12 w-12 place-items-center rounded-full border border-[#38bdf8]/30 bg-white/5 text-[#dbeafe] transition hover:-translate-y-1 hover:border-[#a78bfa] hover:bg-[#38bdf8]/15'>
                <Icon icon='mdi:github' width={23} />
              </Link>
              <Link
                href={socialLinks.email}
                aria-label='Email'
                className='grid h-12 w-12 place-items-center rounded-full border border-[#38bdf8]/30 bg-white/5 text-[#dbeafe] transition hover:-translate-y-1 hover:border-[#a78bfa] hover:bg-[#38bdf8]/15'>
                <Icon icon='mdi:email-outline' width={23} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className='relative z-10 mx-auto w-full max-w-[430px]'>
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className='relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#a78bfa]/35 bg-white/5 p-3 shadow-[0_0_90px_rgba(56,189,248,0.18)] backdrop-blur-xl'>
              <Image
                src={getImgPath(heroPortrait)}
                alt='Harikrishnan N portrait'
                fill
                priority
                sizes='(min-width: 768px) 430px, 90vw'
                className='rounded-[1.5rem] object-cover object-[50%_18%]'
              />
            </motion.div>
            <div className='absolute -bottom-7 -left-6 rounded-2xl border border-[#38bdf8]/30 bg-black/55 p-5 shadow-[0_0_45px_rgba(56,189,248,0.22)] backdrop-blur-xl'>
              <p className='text-sm text-white/60'>Creative Stack</p>
              <p className='text-lg font-bold text-[#dbeafe]'>Code + Cinema</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id='about' className='px-5'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-120px' }}
          variants={fadeUp}
          className='mx-auto max-w-5xl rounded-[2rem] border border-[#38bdf8]/25 bg-white/[0.045] p-8 shadow-[0_0_80px_rgba(56,189,248,0.1)] backdrop-blur-xl md:p-12'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#38bdf8]'>
            About Me
          </p>
          <h2 className='mb-6 text-3xl font-bold text-white md:text-5xl'>
            Turning Ideas into Powerful Digital Solutions
          </h2>
          <p className='text-lg leading-8 text-white/72'>
            Hi, I&apos;m Harikrishnan - a passionate Full Stack Developer with
            a strong focus on Cloud Computing and modern web technologies. I
            enjoy transforming ideas into interactive, high-performing digital
            solutions that create real impact.
          </p>
          <p className='mt-5 text-lg leading-8 text-white/72'>
            Beyond development, I am also a professional video editor with
            experience in editing multiple short films and creative content. I
            combine technical expertise with creative storytelling and digital
            marketing knowledge to build engaging digital experiences.
          </p>
        </motion.div>
      </section>

      <Education />

      <section id='skills' className='px-5'>
        <div className='mx-auto max-w-7xl'>
          <SectionTitle eyebrow='Skills' title='A balanced stack for building and storytelling' />
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={stagger}
            className='grid gap-6 lg:grid-cols-3'>
            <SkillCard title='Technical Skills' skills={technicalSkills} />
            <SkillCard title='Additional Expertise' skills={expertise} />
            <SkillCard title='Soft Skills' skills={softSkills} />
          </motion.div>
        </div>
      </section>

      <section id='services' className='px-5'>
        <div className='mx-auto max-w-7xl'>
          <SectionTitle eyebrow='Services' title='Premium execution across code, content, and growth' />
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={stagger}
            className='grid gap-6 md:grid-cols-3'>
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className='group rounded-2xl border border-[#38bdf8]/20 bg-white/[0.045] p-7 backdrop-blur-xl transition hover:border-[#a78bfa]/65 hover:shadow-[0_0_70px_rgba(167,139,250,0.16)]'>
                <div className='mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#c4b5fd] via-[#38bdf8] to-[#312e81] text-black shadow-[0_0_35px_rgba(167,139,250,0.28)]'>
                  <Icon icon={service.icon} width={28} />
                </div>
                <h3 className='mb-4 text-2xl font-bold text-white'>
                  {service.title}
                </h3>
                <p className='leading-7 text-white/65'>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id='projects' className='px-5'>
        <div className='mx-auto max-w-7xl'>
          <SectionTitle eyebrow='Projects' title='Projects' />
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={stagger}
            className='grid gap-6 md:grid-cols-3'>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                whileHover={{ scale: 1.025, y: -8 }}
                className='relative overflow-hidden rounded-2xl border border-[#38bdf8]/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(56,189,248,0.04))] p-5 shadow-[0_0_65px_rgba(56,189,248,0.1)]'>
                <div className='absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#38bdf8]/20 blur-3xl' />
                <ProjectVisual icon={project.icon} metric={project.metric} image={project.image} />
                <p className='mb-4 text-sm font-semibold text-[#38bdf8]'>
                  0{index + 1} / Projects
                </p>
                <h3 className='relative z-10 text-2xl font-bold leading-tight text-white'>
                  {project.title}
                </h3>
                <p className='relative z-10 mt-5 text-white/60'>
                  {project.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id='experience' className='px-5'>
        <div className='mx-auto max-w-5xl'>
          <SectionTitle eyebrow='Experience' title='Professional work that blends logic and story' />
          <div className='space-y-6'>
            {experience.map((item) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='rounded-2xl border border-[#38bdf8]/20 bg-white/[0.045] p-7 backdrop-blur-xl'>
                <div className='flex flex-wrap items-start justify-between gap-4'>
                  <h3 className='text-2xl font-bold text-white'>{item.role}</h3>
                  <span className='rounded-full bg-[#38bdf8]/10 px-4 py-2 text-sm font-semibold text-[#dbeafe]'>
                    {item.period}
                  </span>
                </div>
                <p className='mt-4 leading-7 text-white/65'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id='contact' className='px-5'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]'>
          <div>
            <SectionTitle eyebrow='Contact' title='Let us create something premium' />
            <div className='flex flex-wrap gap-4'>
              <Link
                href={socialLinks.instagram}
                target='_blank'
                className='rounded-full border border-[#38bdf8]/30 px-5 py-3 text-[#dbeafe] transition hover:bg-[#38bdf8]/15'>
                Instagram
              </Link>
              <Link
                href={socialLinks.linkedin}
                target='_blank'
                className='rounded-full border border-[#38bdf8]/30 px-5 py-3 text-[#dbeafe] transition hover:bg-[#38bdf8]/15'>
                LinkedIn
              </Link>
              <Link
                href={socialLinks.github}
                target='_blank'
                className='rounded-full border border-[#38bdf8]/30 px-5 py-3 text-[#dbeafe] transition hover:bg-[#38bdf8]/15'>
                GitHub
              </Link>
              <Link
                href={socialLinks.email}
                className='rounded-full bg-[#38bdf8] px-5 py-3 font-bold text-black transition hover:bg-[#a78bfa]'>
                Email Me
              </Link>
            </div>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='rounded-2xl border border-[#38bdf8]/25 bg-white/[0.055] p-6 shadow-[0_0_70px_rgba(56,189,248,0.1)] backdrop-blur-xl'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <input className='rounded-xl border border-[#38bdf8]/20 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#a78bfa]' placeholder='Name' />
              <input className='rounded-xl border border-[#38bdf8]/20 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#a78bfa]' placeholder='Email' />
            </div>
            <input className='mt-4 w-full rounded-xl border border-[#38bdf8]/20 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#a78bfa]' placeholder='Project type' />
            <textarea className='mt-4 h-36 w-full resize-none rounded-xl border border-[#38bdf8]/20 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#a78bfa]' placeholder='Tell me about your idea' />
            <button className='mt-4 w-full rounded-xl bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#c4b5fd] px-6 py-4 font-black text-black shadow-[0_0_38px_rgba(167,139,250,0.3)] transition hover:scale-[1.01]'>
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      <footer className='border-t border-[#38bdf8]/15 px-5 py-10 text-center text-white/55'>
        <p className='text-lg font-bold text-[#dbeafe]'>Harikrishnan N</p>
        <p className='mt-2'>Full Stack Developer | Video Editor | Content Creator</p>
        <a
          href='tel:+919342588497'
          className='mt-4 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/25 bg-white/[0.04] px-5 py-2 text-sm font-semibold text-[#dbeafe] transition hover:border-[#a78bfa]/60 hover:bg-[#38bdf8]/10'>
          Contact: +91 93425 88497
        </a>
      </footer>
    </main>
  )
}

const SectionTitle = ({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='mb-12 text-center'>
    <p className='mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#38bdf8]'>
      {eyebrow}
    </p>
    <h2 className='mx-auto max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl'>
      {title}
    </h2>
  </motion.div>
)

export default PremiumPortfolio
