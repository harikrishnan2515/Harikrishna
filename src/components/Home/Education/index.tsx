'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const educationData = [
  {
    id: 1,
    credential:
      'Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science',
    institution: 'Coimbatore Institute of Engineering and Technology',
    duration: '2023 - 2027',
    metricLabel: 'Current CGPA',
    metricValue: '8.00',
    detail: 'Expected Graduation: 2027',
    icon: 'solar:code-bold-duotone',
  },
  {
    id: 2,
    credential: 'Higher Secondary Certificate (HSC)',
    institution:
      'Karaikudi Maharishi Vidya Mandir Matriculation Higher Secondary School',
    duration: 'Higher Secondary',
    metricLabel: 'Percentage',
    metricValue: '69%',
    detail: 'Academic foundation for engineering studies',
    icon: 'solar:notebook-bookmark-bold-duotone',
  },
  {
    id: 3,
    credential: 'Secondary School Leaving Certificate (SSLC)',
    institution:
      'Karaikudi Maharishi Vidya Mandir Matriculation Higher Secondary School',
    duration: 'Secondary School',
    detail: 'Strong base in core academics and analytical learning',
    icon: 'solar:medal-ribbon-star-bold-duotone',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
}

const Education = () => {
  return (
    <section
      id='education'
      className='relative overflow-hidden bg-[#030303] px-5 py-24 text-white sm:py-28'>
      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.98),rgba(5,8,22,0.96)_48%,rgba(3,3,3,0.98)),radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(167,139,250,0.16),transparent_30%)]' />
      <div className='pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px]' />
      <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/45 to-transparent' />
      <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/35 to-transparent' />

      <div className='relative z-10 mx-auto max-w-7xl'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-120px' }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mx-auto mb-16 max-w-3xl text-center'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#38bdf8]'>
            Academic Journey
          </p>
          <h2 className='text-4xl font-black leading-tight text-white md:text-6xl'>
            Education
          </h2>
          <div className='mx-auto mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-[#38bdf8] to-[#a78bfa] shadow-[0_0_36px_rgba(56,189,248,0.32)]' />
        </motion.div>

        <div className='relative mx-auto max-w-5xl'>
          <div className='absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-[#38bdf8]/75 via-[#a78bfa]/40 to-transparent md:left-1/2 md:-translate-x-1/2' />

          <div className='space-y-8 md:space-y-10'>
            {educationData.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.65,
                  ease: 'easeOut',
                }}
                className={`group relative grid gap-6 pl-14 md:grid-cols-2 md:pl-0 ${
                  index % 2 === 0 ? '' : 'md:[&>*:last-child]:col-start-1'
                }`}>
                <div className='absolute left-0 top-8 z-20 grid h-10 w-10 place-items-center rounded-full border border-[#38bdf8]/45 bg-[#030303] shadow-[0_0_34px_rgba(56,189,248,0.24)] md:left-1/2 md:-translate-x-1/2'>
                  <span className='grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[#c4b5fd] via-[#38bdf8] to-[#2563eb] text-[11px] font-black text-black'>
                    {item.id}
                  </span>
                </div>

                <div
                  className={`hidden md:block ${
                    index % 2 === 0 ? '' : 'md:col-start-2'
                  }`}
                />

                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  className={`relative overflow-hidden rounded-2xl border border-[#38bdf8]/20 bg-white/[0.05] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-colors duration-500 hover:border-[#a78bfa]/60 hover:bg-white/[0.075] hover:shadow-[0_28px_95px_rgba(167,139,250,0.16)] md:p-7 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12 md:row-start-1'
                  }`}>
                  <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/65 to-[#a78bfa]/45 opacity-80' />
                  <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.12),transparent_34%,rgba(167,139,250,0.12))] opacity-60 transition-opacity duration-500 group-hover:opacity-100' />

                  <div className='relative z-10'>
                    <div className='mb-6 flex flex-wrap items-start justify-between gap-4'>
                      <div className='grid h-12 w-12 place-items-center rounded-xl border border-[#38bdf8]/30 bg-[#38bdf8]/10 text-[#dbeafe] shadow-[0_0_28px_rgba(56,189,248,0.16)]'>
                        <Icon icon={item.icon} width={27} />
                      </div>
                      {item.metricValue && (
                        <span className='rounded-full border border-[#38bdf8]/35 bg-[#38bdf8]/10 px-4 py-2 text-sm font-black text-[#dbeafe] shadow-[0_0_24px_rgba(56,189,248,0.14)]'>
                          {item.metricLabel}: {item.metricValue}
                        </span>
                      )}
                    </div>

                    <p className='mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#38bdf8]/85'>
                      <Icon icon='solar:calendar-bold-duotone' width={17} />
                      {item.duration}
                    </p>
                    <h3 className='text-2xl font-black leading-tight text-white transition-colors duration-300 group-hover:text-[#c4b5fd]'>
                      {item.credential}
                    </h3>
                    <p className='mt-4 flex items-start gap-3 leading-7 text-white/68'>
                      <Icon
                        icon='solar:buildings-2-bold-duotone'
                        width={21}
                        className='mt-1 shrink-0 text-[#38bdf8]'
                      />
                      <span>{item.institution}</span>
                    </p>
                    <p className='mt-5 border-t border-white/10 pt-5 text-sm font-medium text-white/52'>
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
