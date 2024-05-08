'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import { fadeIn } from "/variants"
import { MdOutlineMapsHomeWork, MdOutlineBuildCircle, MdOutlineDirectionsCar } from 'react-icons/md'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function About() {
   const [ref, inView] = useInView({
      threshold: 0.5
   })

   return (
      <section id="about" className="w-full h-auto pt-16 md:pt-32 flex items-center" ref={ref}>
         <div className="container xl:max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:justify-center xl:flex-row xl:justify-between">
               {/* about image */}
               <motion.div 
               variants={fadeIn('down', 0.2)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: true, amount: 0.6 }}
               className="flex-1 mb-8 xl:mb-0">
                  <Image 
                     className="rounded-[20px]" 
                     src={'/images/about/car01.png'} 
                     width={600} 
                     height={448}
                  />
               </motion.div>

               {/* about text */}
               <div className="flex-1 flex items-center lg:justify-center">
                  <div className="xl:max-w-[517px] w-full">
                     <motion.h2 
                     variants={fadeIn('up', 0.4)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: true, amount: 0.6 }}
                     className="h2">
                        Car Services Simplified
                     </motion.h2>

                     <motion.p 
                     variants={fadeIn('up', 0.6)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: true, amount: 0.6 }}
                     className="mb-[40px] max-w-md text-lg">
                        Rent, choose, and repair with ease. Our convenient locations, diverse car types, and
                        reliable repair points ensure a seamless car experience.
                     </motion.p>

                     {/* stats */}
                     <motion.div 
                     variants={fadeIn('down', 0.8)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: true, amount: 0.2 }}
                     className="flex items-center gap-x-8 mb-10">
                        {/* car types */}
                        <div className="flex flex-col w-[100px]">
                           <MdOutlineDirectionsCar className="text-accent text-5xl mb-2"/>
                           <div className="text-3xl font-black mb-2">
                              {
                                 inView ? ( <CountUp start={0} end={50} duration={3} delay={1}/> ) : null
                              }+
                           </div>
                           <div className="uppercase text-[13px] text-secondary font-semibold">
                              car <br/> types
                           </div>
                        </div>

                        {/* rental outlets */}
                        <div className="flex flex-col w-[100px]">
                           <MdOutlineMapsHomeWork className="text-accent text-5xl mb-2"/>
                           <div className="text-3xl font-black mb-2">
                              {
                                 inView ? ( <CountUp start={0} end={135} duration={3} delay={1}/> ) : null
                              }
                           </div>
                           <div className="uppercase text-[13px] text-secondary font-semibold">
                              rental <br/> outlets
                           </div>
                        </div>

                        {/* repair points */}
                        <div className="flex flex-col w-[100px]">
                           <MdOutlineBuildCircle className="text-accent text-5xl mb-2"/>
                           <div className="text-3xl font-black mb-2">
                              {
                                 inView ? ( <CountUp start={0} end={35} duration={3} delay={1}/> ) : null
                              }
                           </div>
                           <div className="uppercase text-[13px] text-secondary font-semibold">
                              repair <br/> points
                           </div>
                        </div>
                     </motion.div>

                     {/* button */}
                     <motion.button 
                     variants={fadeIn('up', 1)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: true, amount: 0.6 }}
                     className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full
                     h-16  uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]">
                        See all cars
                     </motion.button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
