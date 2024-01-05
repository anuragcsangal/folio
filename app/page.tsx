"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { blackhan } from "./fonts";
import FollowCursor from "./components/FollowCursor";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center gap-1 bg-black">
      <FollowCursor />
      <div className="h-[90%] w-[95%] p-10 md:flex md:flex-row flex flex-col gap-5">
        <div className="w-[100%] h-[60%] md:h-[100%] md:w-[50%] bg-[#8b1df2] rounded-xl text-white py-10 px-5 relative cursor-pointer">
          <h1 className={`${blackhan.className} text-6xl md:text-8xl font-bold text-[#j0j0j0]`}>Anurag Angal</h1>
          <p className="text-2xl md:text-5xl font-thin md:font-normal mt-5">
            Software Developer
          </p>
          <motion.div className="bg-[#8b1df2] mt-10 h-[40%] p-8  rounded-xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, backgroundColor: 'black', color: 'white' }} ><p className="text-[#8b1df2] text-4xl">I know its empty. I don&apos;t know what to put here.<br />Suggestions Please!!!</p></motion.div>
          <div className="absolute bottom-5">
            <p className="text-sm md:text-3xl font-extralight mt-10">
              I&apos;m a Developer & Writer from India.
            </p>
            <p className="text-sm font-extralight md:text-3xl ">
              love to learn & explore new things
            </p>
            <p className="relative text-sm font-extralight md:text-3xl ">
              Builder and Breaker
            </p>
          </div>
        </div>
        <div className="h-[40%] w-[100%] md:h-[100%] md:w-[50%] flex md:flex-col gap-5">
          <Link
            href="/projects"
            className="h-[100%] w-[100%] md:h-[50%] md:w-full bg-[#fb7a08] rounded-xl flex flex-col justify-center items-center cursor-pointer z-50"
          >
            <h1 className={`${blackhan.className} text-2xl md:text-7xl font-bold text-white`}>
              Projects
            </h1>
            <p className="invisible md:visible text-sm md:text-2xl font-thin mt-5 text-white bottom-5 left-4">
              List of Projects that I&apos;ve done
            </p>
          </Link>
          <Link
            href="/about"
            className="h-[100%] w-[100%] md:h-[50%] md:w-full bg-[#ee0f58] rounded-xl flex flex-col justify-center items-center cursor-pointer z-50"
          >
            <h1 className={`${blackhan.className} text-3xl ml-2 md:text-6xl font-bold text-white  md:left-4`}>
              About Me
            </h1>
            <p className="invisible md:visible mt-5 underline md:text-2xl text-white font-thin">Read More</p>
          </Link>
        </div>
      </div>
      <div className="w-[95%] h-[10%] flex justify-center items-center">
        <div className="w-[95%] h-[90%] bg-gray-500 mb-5 rounded-xl flex justify-evenly items-center gap-5">
          <Link
            href="https://github.com/anuragcsangal"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub size={50} />
          </Link>
          <Link
            href="https://linkedin.com/in/anurag-angal"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin size={50} />
          </Link>
          <Link href="mailto:anurag.angalcs@gmail.com">
            <CiMail size={50} />
          </Link>
          <Link
            href="https://twitter.com/angal_anurag"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaXTwitter size={50} />
          </Link>
        </div>
      </div>
      <div className="h-[98%] w-[95%] bg-white absolute rounded-xl hidden modal"></div>
    </main >
  );
}
