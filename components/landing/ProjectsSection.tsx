import { IconArrowNarrowRight, IconArrowUpRight, IconCircleArrowRightFilled, IconLink } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "GDInvest",
    description:
      "GDInvest is a modern investment platform that combines technology with expert financial insights to help users grow their wealth through data-driven portfolios and seamless trade execution.",
    image: "/projects/gdinvest/img1.png",
    link: "https://gdinvest.in/",
  },
  {
    title: "1BeatClub",
    description:
      "1BeatClub is our own real-time collaborative music platform that lets users create music clubs, add tracks, and vote together to shape the playlist — turning any gathering into a shared music experience where everyone’s vibe matters.",
    image: "/projects/1beatclub/img1.png",
    link: "https://1beatclub.in/",
  },
  {
    title: "Shubham Color",
    description:
      "Shubham Color is a corporate website we developed for Shubham Industries, a leading manufacturer and exporter of high-quality dyes and color solutions. The site showcases their product range, global capabilities, and commitment to innovation and quality.",
    image: "/projects/shubhamcolor/img1.png",
    link: "https://shubhamcolor.com/",
  },
     {
    title: "Hello Pet Dreams",
    description:
      "Hello Pet Dreams is a creative AI-powered pet art platform we built that transforms pet photos into stunning custom artwork in fun, imaginative styles — from heroes and royalty to anime and astronaut themes — making every pet feel legendary and memorable.",
    image: "/projects/hellopetdreams/img1.png",
    link: "https://hellopetdreams.com/",
  },
   {
    title: "Colors India",
    description:
      "A professional corporate website we built for Colors India Industries — a leading manufacturer and exporter of high-quality industrial dyes and colour solutions. The site highlights their range of premium dye products, commitment to quality, and global service capabilities.",
    image: "/projects/colorsindia/img1.png",
    link: "https://colorsindiaindustries.com/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="  bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="p-4 bg-neutral-100">
        <div className="relative aspect-video overflow-hidden rounded-md ">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-500 "
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-2">
        <h3 className="text-2xl font-semibold text-primary mb-3">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        
      <Button asChild size="lg" className="bg-secondary/90 text-primary font-semibold cursor-pointer hover:bg-secondary rounded-full  [&_svg:not([class*='size-'])]:size-6 group ">
      <Link href={project.link} target="_blank" className="flex items-center gap-2">
        Visit


          <IconCircleArrowRightFilled className=" group-hover:-rotate-45 transition-transform duration-300"/>
      </Link>
     
      </Button>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="flex relative">
      <div className="flex-1 flex items-center py-20 h-screen sticky top-0">
        <div className="px-14">
          <h2 className="text-md text-primary uppercase tracking-wider">
            Our Projects
          </h2>
          <p className="mt-12 text-6xl font-semibold text-primary leading-tight">
            Projects We&apos;ve Delivered
          </p>
          <p className="mt-6 text-muted-foreground max-w-lg text-lg leading-relaxed">
            Our projects showcase our commitment to quality and innovation. Each
            project is a testament to our expertise and dedication.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-primary   ">
        <div className="space-y-20 px-14 py-14">
            {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        </div>
      </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200" />
        <div className="absolute top-0 left-0 w-full h-px bg-neutral-200" />
    </section>
  );
}
