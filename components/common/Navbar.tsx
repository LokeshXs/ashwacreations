
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { IconCalendarCheck } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <nav className="fixed px-4 py-2 top-2 inset-x-0 bg-white border backdrop-blur-md flex items-center justify-between max-w-6xl mx-auto rounded-full">
      <p>AshwaCreations</p>

      <div className="flex justify-center items-center gap-8">
        <ul className=" flex justify-center items-center gap-4 ">
          <li className="  font-medium hover:text-primary">
            <Link href="/">Home</Link>
          </li>
          <li className="  font-medium hover:text-primary">
            <Link href="/about">About</Link>
          </li>
          <li className="  font-medium hover:text-primary">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className=" flex justify-center items-center gap-4">
          <Button size="lg"  className=" rounded-full  bg-secondary text-primary font-semibold [&_svg:not([class*='size-'])]:size-5 ">Book Free Call <IconCalendarCheck /></Button>
         
        </div>
      </div>
    </nav>
  );
}
