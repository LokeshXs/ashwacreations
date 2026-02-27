import { IconCircleArrowRightFilled } from "@tabler/icons-react";
import { Button } from "../ui/button";
import Link from "next/link";
import StatsContainer from "./StatsContainer";

export default function HeroSection() {
  return (
    <section id="home" className="md:min-h-screen pt-24 pb-12 gap-20 md:p-0 md:gap-0 flex flex-col relative overflow-hidden px-4 sm:px-6 md:px-10 lg:px-14 ">
      <div className="flex-1 self-stretch flex flex-col justify-center items-center translate-y-8 sm:translate-y-6 md:translate-y-8 lg:translate-y-12">
        <div className="text-5xl  md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary flex flex-col items-center gap-1 sm:gap-2 leading-[1.1] drop-shadow-md">
          <h1 className="text-center">
            Build MVPs{" "}
            <span className="text-transparent bg-radial from-secondary to-primary bg-clip-text max-sm:text-6xl">
              5X
            </span>
          </h1>
          <div className="italic flex justify-start">
            <div className="flex relative gap-2 sm:gap-4">
              <div className="flex relative">
                <p>Faster</p>
                <span className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 lg:-bottom-4 left-full">
                  <ThreeLines />
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-muted-foreground mt-6 sm:mt-8 text-center text-sm sm:text-base lg:text-lg px-2">
          We help founders design, build, and launch MVPs quickly without
          compromising on quality or future scalability
        </p>

        <Button
        asChild
          className="mt-4 sm:mt-6 rounded-full [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-6 group cursor-pointer"
          size="lg"
        >
         <Link href="https://cal.com/ashwa-creations/30min" target="_blank" >
          <span className="text-sm sm:text-base">Get A Quote</span>
          <IconCircleArrowRightFilled className="text-secondary group-hover:-rotate-45 transition-transform duration-300" />
         </Link>
        </Button>
      </div>
   <StatsContainer/>
      <div className=" absolute w-full h-full sm:bg-radial-[100%_100%_at_50%_100%] from-transparent sm:from-50%  bg-radial-[140%_100%_at_50%_100%] from-60% to-secondary/90 bottom-0 left-1/2 -translate-x-1/2 -z-2 "/>
    </section>
  );
}

function ThreeLines() {
  return (
    <svg
      className="w-32 h-10 sm:w-48 sm:h-14 md:w-64 md:h-20 lg:w-80 lg:h-24 xl:w-96 xl:h-28"
      viewBox="330 -6 440 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#b7e552" strokeWidth="6" strokeLinecap="round" className="sm:stroke-[6.5] md:stroke-7 lg:stroke-[7.5] xl:stroke-8">
        <line x1="360" y1="40" x2="410" y2="40" />
        <line x1="350" y1="58" x2="400" y2="58" />
        <line x1="340" y1="76" x2="390" y2="76" />
      </g>
    </svg>
  );
}
