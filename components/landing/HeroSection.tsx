import { IconCircleArrowRightFilled } from "@tabler/icons-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      <div className=" flex-1    self-stretch flex flex-col justify-center items-center px-14 translate-y-12 ">
        <div className=" text-8xl font-bold text-primary flex flex-col items-center gap-2  leading-[1.1] drop-shadow-md">
          <h1>
            Build MVPs{" "}
            <span className="text-transparent bg-radial from-secondary to-primary bg-clip-text">
              5X
            </span>
          </h1>
          <div className=" italic flex justify-start">
            <div className=" flex relative gap-4 ">
              <div className=" flex relative">
                <p className=" ">Faster</p>
                <span className=" absolute left-75">
                  {" "}
                  <ThreeLines />
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className=" max-w-xl text-muted-foreground mt-4 text-center">
          We help founders design, build, and launch MVPs quickly without
          compromising on quality or future scalability
        </p>

        <Button
          className="mt-8  rounded-full [&_svg:not([class*='size-'])]:size-6 group  cursor-pointer"
          size="lg"
        >
          Get A Quote <IconCircleArrowRightFilled className="text-secondary group-hover:-rotate-45 transition-transform duration-300 " />
        </Button>
      </div>
      <section>
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center ">
              <h2 className="text-3xl font-bold text-primary ">10+</h2>
              <p className="text-gray-500 mt-2">Projects Delivered</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary">100%</h2>
              <p className="text-gray-500 mt-2">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary">3+</h2>
              <p className="text-gray-500 mt-2">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
      <div className=" absolute w-full h-full bg-radial-[100%_100%_at_50%_100%] from-transparent from-50% to-secondary/90 bottom-0 left-1/2 -translate-x-1/2 -z-2 "/>
    </section>
  );
}

function ThreeLines() {
  return (
    <svg
      width="440"
      height="120"
      viewBox="330 -6 440 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#b7e552" stroke-width="8" stroke-linecap="round">
        <line x1="360" y1="44" x2="410" y2="44" />
        <line x1="350" y1="60" x2="400" y2="60" />
        <line x1="340" y1="76" x2="390" y2="76" />
      </g>
    </svg>
  );
}
