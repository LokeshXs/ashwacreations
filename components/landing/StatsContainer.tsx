"use client";

import { useRef } from "react";
import { NumberTicker } from "../ui/number-ticker";

import {motion, useInView} from "motion/react";


export default function StatsContainer() {

    

    return (
           <section >
        <motion.div  initial={{opacity:0,filter:"blur(10px)"}} animate={{opacity:1,filter:"blur(0px)"}} viewport={{once:true}} className="container mx-auto py-8 sm:py-10 md:py-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <h2 className="text-xl md:text-3xl  sm:text-2xl font-bold text-primary"><NumberTicker value={10} startValue={2} className=" text-primary"  />+</h2>
              <p className="text-gray-500 mt-2 text-xs sm:text-sm md:text-base">Projects Delivered</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl md:text-3xl  sm:text-2xl font-bold text-primary"><NumberTicker value={100} startValue={50} className=" text-primary"  />%</h2>
              <p className="text-gray-500 mt-2 text-xs sm:text-sm md:text-base">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl md:text-3xl  sm:text-2xl font-bold text-primary"><NumberTicker value={3} startValue={1} className=" text-primary"  />+</h2>
              <p className="text-gray-500 mt-2 text-xs sm:text-sm md:text-base">Years of Experience</p>
            </div>
          </div>
        </motion.div>
      </section>
    )
}