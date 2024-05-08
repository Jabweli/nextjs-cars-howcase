'use client';

import Image from "next/image";

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from "/variants";


export default function Cta() {
   return (
      <section className="pt-16 xl:pt-48 flex items-end pb-0" id="contact">
         <div className="container xl:max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row xl:items-center">
               {/* text */}
               <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
                  <div className="max-w-[520px] mx-auto order-2 xl:order-none">
                     <motion.h2 
                     variants={fadeIn('right', 0.2)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: true, amount: 0.6 }}
                     className="h2 xl:text-[46px]">
                        Download our App now and hit the road with ease.
                     </motion.h2>

                     <motion.p
                     variants={fadeIn('right', 0.4)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: true, amount: 0.6 }}
                     className="mb-10 text-base lg:text-lg"
                     >
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                     Consectetur similique necessitatibus veritatis! Aliquid, laborum. 
                     Illum, totam natus ipsam est nobis quibusdam facere non officiis 
                     tempora veniam.
                     </motion.p>

                     {/* buttons */}
                     <motion.div 
                     variants={fadeIn('right', 0.6)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: true, amount: 0.6 }}
                     className="flex gap-x-3 justify-center md:justify-start">
                        <button className="btn-cta">
                           <Image 
                              src={'/icons/buttons/google-play.svg'} 
                              width={132} 
                              height={36}
                              alt="google-play"
                           />
                        </button>
                        <button className="btn-cta">
                           <Image 
                              src={'/icons/buttons/app-store.svg'} 
                              width={132} 
                              height={36}
                              alt="app-store"
                           />
                        </button>
                     </motion.div>
                  </div>
               </div>

               {/* image */}
               <motion.div 
               variants={fadeIn('left', 0.8)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: true, amount: 0.2 }}
               className="flex-1 flex justify-center order-1 md:order-none">
                  <Image 
                     src={'/images/cta/phone.svg'} 
                     width={320} 
                     height={640} 
                     alt="phone"
                  />
               </motion.div>
            </div>
         </div>
      </section>
   )
}
