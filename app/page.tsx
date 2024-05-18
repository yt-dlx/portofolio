"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SiUnacademy } from "react-icons/si";
import { GiTreeBranch } from "react-icons/gi";
import { FaTextHeight } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

import { SiVercel } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const skills = [
  "Nodejs",
  "Sequelize",
  "Python",
  "Javascript",
  "Typescript",
  "Mongodb",
  "Docker",
  "Linux",
  "TailwindCss",
  "Next.js",
  "React.js",
  "RESTful-APIs",
  "Framer Motion",
  "Prisma ORM",
  "CI/CD",
  "GitHub",
];
const percentages = [
  "Advance",
  "Intermediate",
  "Intermediate",
  "Advance",
  "Intermediate",
  "Advance",
  "Advance",
  "Intermediate",
  "Advance",
  "Advance",
  "Advance",
  "Advance",
  "Basic",
  "Intermediate",
  "Intermediate",
  "Advance",
];
const containers = [
  {
    id: "yt-dlx",
    title: "@yt-dlx (latest)",
    items: [
      {
        name: "yt-dlx",
        Link: "https://github.com/yt-dlx/yt-dlx",
        language: "TypeScript 98.9% | Other 1.1%",
      },
      {
        name: "Portofolio New",
        Link: "https://github.com/yt-dlx/yt-dlx",
        language: "TypeScript 98.9% | Other 1.1%",
      },
      {
        name: "Rom Vault",
        Link: "https://github.com/yt-dlx/RomVault",
        language: "TypeScript 97.0% | JavaScript 2.3% | Other 0.7%",
      },
      {
        name: "more coming ",
        Link: "https://github.com/yt-dlx",
        language: "/",
      },
    ],
  },
  {
    id: "magneum",
    title: "@magneum (old)",
    items: [
      {
        name: "Portofolio Old",
        Link: "https://github.com/magneum/",
        language: "TypeScript 93.8% | JavaScript 5.7% | CSS 0.5%",
      },
      {
        name: "Bloom Bot or Vlkyre Bot",
        Link: "https://github.com/magneum/bloombot",
        language: "JavaScript 99.5% | Other 0.5%",
      },
      {
        name: "Miles AI",
        Link: "https://github.com/magneum/miles-ai",
        language: "Python 92.6% | JavaScript 7.4%",
      },
      {
        name: "yt dlp",
        Link: "https://github.com/magneum/yt-dlp",
        language: "JavaScript 99.5% | Dockerfile 0.5%",
      },
      {
        name: "premiumdl",
        Link: "https://github.com/magneum/premiumdl",
        language: "TypeScript 51.9% | JavaScript 48.1%",
      },
      {
        name: "Caving Center",
        Link: "https://github.com/magneum/anjana",
        language: " TypeScript 86.8% | JavaScript 7.3% | CSS 5.3% | HTML 0.6%",
      },
      {
        name: "youtube exec",
        Link: "https://github.com/magneum/youtube-exec",
        language: "JavaScript 100.0%",
      },
      {
        name: "XeTron",
        Link: "https://github.com/magneum/xetron",
        language: "JavaScript 99.9% | Dockerfile 0.1%",
      },
      {
        name: "PurgeBot",
        Link: "https://github.com/magneum/purgebot",
        language: "ython 98.5% | Dockerfile 1.5%",
      },
      {
        name: "facial emotion recognition",
        Link: "https://github.com/magneum/facial-emotion-recognition",
        language: "Python 100.0%",
      },
      {
        name: "YouTube Music Downloader",
        Link: "https://github.com/magneum/YouTube-Music-Downloader",
        language: "Python 90.8% | Dockerfile 9.2%",
      },
      {
        name: "YouTube Video Downloader",
        Link: "https://github.com/magneum/YouTube-Video-Downloader",
        language: "Python 95.6% | Dockerfile 4.4%",
      },
      {
        name: "MultiBot",
        Link: "https://github.com/magneum/MultiBot",
        language: "Python 100.0%",
      },
      {
        name: "SoundCloud Downloader",
        Link: "https://github.com/magneum/SoundCloud-Downloader",
        language: "Python 94.9% | Dockerfile 5.1%",
      },
      {
        name: "YouTify",
        Link: "https://github.com/magneum/YouTify",
        language: "JavaScript 99.4% | Other 0.6%",
      },
      {
        name: "Spotify",
        Link: "https://github.com/magneum/Spotify",
        language: "Python 72.4% | Dockerfile 27.6%",
      },
      {
        name: "AFK Robot",
        Link: "https://github.com/magneum/AFK-Robot",
        language: "Python 100.0%",
      },
      {
        name: "Norded",
        Link: "https://github.com/magneum/Norded",
        language: "Python 98.9% | Dockerfile 1.1%",
      },
      {
        name: "April",
        Link: "https://github.com/magneum/April",
        language: "JavaScript 98.9% | Other 1.1%",
      },
      {
        name: "Anime Downloader",
        Link: "https://github.com/magneum/Anime-Downloader",
        language: "Python 99.2% | Dockerfile 0.8%",
      },
      {
        name: "Klaw Robot",
        Link: "https://github.com/magneum/Klaw-Robot",
        language: "Python 99.5% | Dockerfile 0.5%",
      },
      {
        name: "cakrabot",
        Link: "https://github.com/magneum/cakrabot",
        language: "JavaScript 100.0%",
      },
      {
        name: "youtube dl",
        Link: "https://github.com/magneum/youtube-dl",
        language: " Python 99.6% | Other 0.4%",
      },
      {
        name: "Marika",
        Link: "https://github.com/magneum/Marika",
        language: "JavaScript 100.0%",
      },
      {
        name: "dislash.py",
        Link: "https://github.com/magneum/dislash.py",
        language: "Python 100.0%",
      },
      {
        name: "discord.py",
        Link: "https://github.com/magneum/discord.py",
        language: "Python 100.0%",
      },
      {
        name: "Discord YouTube Bot",
        Link: "https://github.com/magneum/Discord-YouTube-Bot",
        language: "JavaScript 98.8% | Dockerfile 1.2%",
      },
      {
        name: "Pyrogram Session Maker",
        Link: "https://github.com/magneum/Pyrogram-Session-Maker",
        language: "Python 92.6% | Dockerfile 7.4%",
      },
      {
        name: "Telegram Scrapper",
        Link: "https://github.com/magneum/Telegram-Scrapper",
        language: "Python 97.8% | Dockerfile 2.2%",
      },
      {
        name: "Image to URL",
        Link: "https://github.com/magneum/Image-to-URL",
        language: "Python 98.6% | Dockerfile 1.4%",
      },
      {
        name: "discord interactions",
        Link: "https://github.com/magneum/discord-interactions",
        language: "Python 100.0%",
      },
      {
        name: "yts downloader",
        Link: "https://github.com/magneum/yts-downloader",
        language: "Python 100.0%",
      },
      {
        name: "drut",
        Link: "https://github.com/magneum/drut",
        language: "JavaScript 100.0%",
      },
      {
        name: "Gamecord",
        Link: "https://github.com/magneum/Gamecord",
        language: "JavaScript 100.0%",
      },
      {
        name: "discord.js",
        Link: "https://github.com/magneum/discord.js",
        language: "JavaScript 96.5% | TypeScript 3.5%",
      },
      {
        name: "ScarLord",
        Link: "https://github.com/magneum/ScarLord",
        language: "Python 100.0%",
      },
      {
        name: "Hikuro Discord Bot",
        Link: "https://github.com/magneum/Hikuro-Discord-Bot",
        language: " JavaScript 98.3% | HTML 1.7%",
      },
      {
        name: "spicetify cli",
        Link: "https://github.com/magneum/spicetify-cli",
        language:
          "JavaScript 69.7% | Go 22.3% | CSS 4.6% | PowerShell 2.9% | Shell 0.5%",
      },
      {
        name: "Gamecord",
        Link: "https://github.com/magneum/Gamecord",
        language: "JavaScript 100.0%",
      },
    ],
  },
];

export default function Home() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [activeContainer, setActiveContainer] = useState("yt-dlx");
  const handleButtonClick = (id: any) => {
    setActiveContainer((prev) => (prev === id ? "yt-dlx" : id));
  };
  const AnimatedListItem = ({ icon, skill, initialX, index }: any) => (
    <motion.li className="flex gap-2 items-center">
      <span className={`text-[#b59683] ${index % 2 === 0 ? "rotate-90" : ""}`}>
        {icon}
      </span>{" "}
      {skill}
    </motion.li>
  );
  const SkillList = ({ items, isReversed }: any) => (
    <ul
      className={`flex flex-col justify-start items-${
        isReversed ? "end" : "start"
      } ${isReversed ? "pl-6" : ""}`}
    >
      {items.map((item: any, index: any) => (
        <AnimatedListItem
          key={index}
          icon={isReversed ? null : <GiTreeBranch />}
          skill={item}
          initialX={isReversed ? -200 : 200}
          index={index}
        />
      ))}
    </ul>
  );

  return (
    <AnimatePresence>
      <main className="overflow-scroll overflow-x-hidden h-screen bg-[#0f0d0c] scrollbar-thin scrollbar-track-[#0f0d0c] scrollbar-thumb-[#634d42] relative">
        <header className="py-2 bg-[#0f0d0c]/80 backdrop-blur-2xl sticky top-0 z-50 shadow-2xl shadow-[#231a18] border-b-2 border-[#634d42]">
          <div className="px-6 py-4">
            <div className="flex items-center sm:justify-between sm:gap-4">
              <div className="relative hidden sm:block">
                <label className="sr-only" htmlFor="search">
                  Search
                </label>
                <input
                  className="h-10 w-full rounded-lg border-none bg-neutral-700 pe-10 ps-4 text-sm shadow-sm sm:w-56"
                  id="search"
                  type="search"
                  placeholder="Search website..."
                />
                <button
                  type="button"
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-bg-[#0f0d0c] p-2 text-gray-200 transition hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>
                  <FaSearch />
                </button>
              </div>
              <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="block shrink-0 rounded-lg bg-neutral-700 p-2.5 text-gray-200 shadow-sm hover:text-gray-700 sm:hidden"
                  >
                    <span className="sr-only">Search</span>
                    <FaSearch />
                  </button>
                  <a
                    href="#"
                    className="block shrink-0 rounded-lg bg-neutral-700 p-2.5 text-gray-200 shadow-sm hover:text-gray-700"
                  >
                    <span className="sr-only">Academy</span>
                    <SiUnacademy />
                  </a>
                  <a
                    href="#"
                    className="block shrink-0 rounded-lg bg-neutral-700 p-2.5 text-gray-200 shadow-sm hover:text-gray-700"
                  >
                    <span className="sr-only">Notifications</span>
                    <IoIosNotifications />
                  </a>
                </div>
                <button
                  type="button"
                  className="group flex shrink-0 items-center rounded-lg transition"
                >
                  <span className="sr-only">Menu</span>
                  <Image
                    width={20}
                    height={20}
                    alt="me.png"
                    src="/me.png"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <p className="ms-2 hidden text-left text-xs sm:block">
                    <strong className="block font-medium">Shovit Dutta</strong>
                    <span className="text-bg-neutral-9000">
                      yt-dlx@gmail.com
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="absolute left-12 rounded-full mt-80 animate-bounce h-4/6 bg-[#231a18] w-1" />
          <div className="absolute right-12 rounded-full mt-80 animate-bounce h-4/6 bg-[#231a18] w-1" />
          <div className="absolute left-14 rounded-full mt-96 animate-bounce h-3/6 bg-[#634d42] w-1" />
          <div className="absolute right-14 rounded-full mt-96 animate-bounce h-3/6 bg-[#634d42] w-1" />
          <div className="absolute left-16 rounded-full mt-96 animate-bounce h-2/6 bg-[#b59683] w-1" />
          <div className="absolute right-16 rounded-full mt-96 animate-bounce h-2/6 bg-[#b59683] w-1" />
          <div className="absolute left-20 -ml-2 rounded-full mt-96 animate-bounce h-1/6 bg-[#f7f2f0] w-2" />
          <div className="absolute right-20 -mr-2 rounded-full mt-96 animate-bounce h-1/6 bg-[#f7f2f0] w-2" />
          <motion.section
            className="h-screen flex flex-col items-center justify-center text-[#f7f2f0] absolute z-40 top-0 left-0 right-0 bottom-0"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            style={{ x, y }}
            drag="x"
          >
            <motion.div
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              initial={{
                y: 10,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              className="py-16 p-8 flex flex-col items-center justify-center z-40"
            >
              <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start"></div>
              <div className="mockup-code hover:bg-neutral-950 bg-[#0f0d0c] border-2 border-[#634d42] shadow-2xl shadow-[#634d42] w-full p-6">
                <h1 className="text-[#f7f2f0] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl lg:leading-normal font-extrabold">
                  <TypeAnimation
                    sequence={[
                      "</ #Full-Stack-Developer>",
                      2000,
                      "The Name's Shovit Dutta",
                      2000,
                    ]}
                    repeat={Infinity}
                    wrapper="span"
                    speed={2}
                  />
                </h1>
                <motion.div
                  className="text-black font-bold uppercase p-2"
                  exit={{ width: 0 }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                >
                  <p className="flex items-center font-mono p-2 bg-[#b59683] rounded-3xl">
                    Guy with a passion for ☕COFFEE & $://CODE💻
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
          <section className="h-screen flex flex-col items-center tracking-widest uppercase justify-center font-bold text-neutral-800/20 text-6xl xl:text-9xl relative z-0">
            {Array.from({ length: 7 }).map((_, outerIndex) => {
              const xValue = outerIndex % 2 === 0 ? 100 : 0;
              const yValue = outerIndex % 2 === 0 ? 0 : 100;
              return (
                <motion.div
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                  }}
                  initial={{
                    x: xValue,
                    y: yValue,
                  }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  key={outerIndex}
                  className="mb-2"
                >
                  {Array.from("</ COFFEE & CODING >").map(
                    (letter, innerIndex) => (
                      <motion.span
                        key={innerIndex}
                        className="text-[#231a18]/40"
                      >
                        {letter}
                      </motion.span>
                    )
                  )}
                </motion.div>
              );
            })}
            <section className="flex absolute mt-52 text-[#f7f2f0] font-thin text-3xl">
              <ul className="flex gap-12 mt-10 text-[#231a18]">
                <motion.li
                  initial={{ x: 200, scale: 0.4 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    stiffness: 260,
                    type: "spring",
                    damping: 20,
                    duration: 2,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="bg-[#b59683] flex items-center text-9xl p-2 rounded-xl"
                >
                  <SiVercel />
                </motion.li>
                <motion.li
                  initial={{ x: 200, scale: 0.4 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    stiffness: 260,
                    type: "spring",
                    damping: 20,
                    duration: 2,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="bg-[#b59683] flex items-center text-9xl p-2 rounded-xl"
                >
                  <SiFramer />
                </motion.li>
                <motion.li
                  initial={{ x: 0, scale: 0.4 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    stiffness: 260,
                    type: "spring",
                    damping: 20,
                    duration: 2,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="bg-[#b59683] flex items-center text-9xl p-2 rounded-xl"
                >
                  <SiNextdotjs />
                </motion.li>
                <motion.li
                  initial={{ x: -200, scale: 0.4 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    stiffness: 260,
                    type: "spring",
                    damping: 20,
                    duration: 2,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="bg-[#b59683] flex items-center text-9xl p-2 rounded-xl"
                >
                  <SiTailwindcss />
                </motion.li>
                <motion.li
                  initial={{ x: -200, scale: 0.4 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    stiffness: 260,
                    type: "spring",
                    damping: 20,
                    duration: 2,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="bg-[#b59683] flex items-center text-9xl p-2 rounded-xl"
                >
                  <BiLogoTypescript />
                </motion.li>
              </ul>
            </section>
          </section>
        </section>
        <section>
          <motion.section
            id="aboutAbove"
            className="p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative flex items-center justify-center">
              <div className="min-h-screen" />
              <div className="xl:w-3/4 lg:w-5/12 min-h-screen bg-[#101010] rounded-3xl shadow-2xl shadow-black border-dotted border-[#b59683] border-2" />
              <section id="skillTree" className="ml-8">
                <motion.div className="text-[#f7f2f0] flex item-center justify-center mb-10 text-8xl font-bold">
                  My{" "}
                  <span className="ml-2 uppercase text-[#b59683]">Skills</span>
                </motion.div>
                <section className="flex gap-8 justify-center text-3xl divide-x-2 divide-[#b59683]">
                  <SkillList items={skills} />
                  <SkillList items={percentages} isReversed />
                </section>
              </section>
              <section className="container flex flex-col justify-center w-full min-h-screen mx-auto lg:absolute lg:inset-x-0">
                <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-semibold text-white uppercase">
                  Here is a Little{" "}
                  <span className="text-[#b59683]">background</span>
                  <br /> About Me
                </h1>
                <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                  <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <motion.div
                      transition={{
                        ease: "easeInOut",
                        duration: 0.7,
                      }}
                      initial={{
                        x: -200,
                        opacity: 0,
                      }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="border-2 border-[#f7f2f0] w-[400px] h-[400px] relative shadow-2xl shadow-[#f7f2f0]/30"
                    >
                      <div className="mt-4 ml-4 border-2 border-[#b59683] w-[400px] h-[400px] relative animate-pulse shadow-2xl shadow-[#b59683]" />
                      <Image
                        width={300}
                        height={300}
                        alt="me-art.png"
                        src="/me-art.png"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[170px] left-[170px]"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    transition={{
                      ease: "easeInOut",
                      duration: 0.7,
                    }}
                    initial={{
                      x: 400,
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="xl:ml-8 mt-8 lg:px-10 lg:mt-0"
                  >
                    <h1 className="text-5xl font-semibold text-gray-200">
                      Share My Journey to <br />
                      Improve{" "}
                      <span className="text-[#b59683]">Productivity</span>
                    </h1>
                    <div className="max-w-lg mt-6 text-gray-300">
                      <ul className="list-disc pl-5">
                        <li>
                          Self-taught full-stack developer excelling in the
                          dynamic M.E.R.N. Stack.
                        </li>
                        <li>
                          Proficient in cutting-edge frameworks: Next.js,
                          React.js, Tailwind CSS, and Prismadb for robust
                          databases.
                        </li>
                        <li>
                          Crafted captivating webpages, seamlessly integrating
                          with various RESTful APIs.
                        </li>
                        <li>
                          Innovating with Social Media Bots for Telegram,
                          Discord, Whatsapp, and Twitter.
                        </li>
                        <li>
                          Regularly deploying and hosting projects with finesse
                          on platforms like Heroku, Vercel, and GitHub.
                        </li>
                        <li>
                          Juggling two exciting client projects - one delving
                          into Recipes and the other in the ever-evolving
                          Medical domain.
                        </li>
                        <li>
                          Passionate about composing music using FL Studio,
                          while also rocking out on percussion instruments and
                          guitar.
                        </li>
                      </ul>
                    </div>
                    <button className="bg-neutral-800 p-4 mt-4 rounded-xl text-white font-semibold hover:bg-neutral-700 w-full">
                      HIRE ME
                    </button>
                  </motion.div>
                </div>
              </section>
            </div>
          </motion.section>
        </section>
        <section>
          <section id="projects" className="xl:p-10 lg:p-10 md:p-8 p-4">
            <div className="mockup-window border border-[#b59683] rounded-3xl shadow-2xl shadow-black">
              <div className="flex flex-col justify-center items-center px-4 py-4 bg-[#101010] text-lg md:text-xl lg:text-2xl xl:text-3xl">
                <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#b59683] tracking-widest">
                  PROJECTS
                </span>
                <span className="text-xl mt-2 text-white">
                  All my projects are showcased below and broken into two parts
                  yt-dlx and magneum
                </span>
                <div className="flex mt-8 gap-2">
                  {containers.map((container) => (
                    <motion.button
                      transition={{
                        ease: "easeInOut",
                        duration: 0.7,
                      }}
                      initial={{
                        y: 50,
                        opacity: 0,
                      }}
                      whileInView={{ y: 0, opacity: 1 }}
                      key={container.id}
                      className={`${
                        activeContainer === container.id
                          ? "bg-[#101010] text-[#b59683] font-bold text-xl rounded-xl shadow-2xl mb-8 shadow-[#b59683]/40 border border-[#b59683] border-dashed"
                          : "bg-[#202020] text-[#f7f2f0]/60 font-bold text-xl rounded-xl shadow-2xl animate-pulse mb-8 shadow-black border border-[#f7f2f0]/40 border-dashed"
                      } px-4 py-2 mr-2`}
                      onClick={() => handleButtonClick(container.id)}
                    >
                      {container.title}
                    </motion.button>
                  ))}
                </div>
                {containers.map((container) => (
                  <div key={container.id} className=" w-full">
                    {activeContainer === container.id && (
                      <div
                        className={`container${container.id} bg-[#101010] p-4 mt-8`}
                      >
                        <div id="tableProjects" className="overflow-x-auto">
                          <table className="table">
                            <thead>
                              <tr>
                                <th className="text-[#b59683] text-2xl">
                                  Name
                                </th>
                                <th className="text-[#b59683] text-2xl">
                                  Language
                                </th>
                                <th className="text-[#b59683] text-2xl">
                                  Repo Link
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {container.items.map((item, index) => (
                                <tr key={index} className="hover:bg-[#101010]">
                                  <td className="font-bold">{item.name}</td>
                                  <td className="italic">{item.language}</td>
                                  <td>
                                    <a href={item.Link}>#visit</a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
        <section>
          <div className="flex py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
            <div className="w-full lg:w-1/2 pr-8">
              <h2 className="mb-4 text-9xl tracking-tight font-extrabold text-[#b59683]">
                HIRE ME
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-white sm:text-xl">
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
              </p>
              <motion.div
                initial={{ x: 8, y: 0 }}
                animate={{
                  x: 2,
                  y: 10,
                  transition: {
                    duration: 0.5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }}
                whileHover={{ scale: 1.2 }}
                className="text-[200px] flex items-center justify-center text-white"
              >
                <FaTelegramPlane />
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 bg-[#101010] p-4 rounded-xl border border-[#b59683] shadow-2xl shadow-[#b59683]/40">
              <form action="#">
                <label
                  htmlFor="email"
                  className="text-white text-xl mb-2 flex items-center gap-2"
                >
                  <MdOutlineAlternateEmail /> Email:
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  className="w-full bg-neutral-800 text-white p-2 rounded-md mb-4 border-none"
                />
                <label
                  htmlFor="name"
                  className="text-white text-xl mb-2 flex items-center gap-2"
                >
                  <MdDriveFileRenameOutline /> Your Name:
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  name="name"
                  className="w-full bg-neutral-800 text-white p-2 rounded-md mb-4 border-none"
                />
                <label
                  htmlFor="message"
                  className="text-white text-xl mb-2 flex items-center gap-2"
                >
                  <FaTextHeight /> Mail Content:
                </label>
                <textarea
                  rows={8}
                  required
                  id="message"
                  name="message"
                  className="w-full bg-neutral-800 text-white p-2 rounded-md mb-4 border-none"
                ></textarea>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 0.99 }}
                  className="bg-[#b59683] w-36 text-2xl flex items-center text-[#101010] px-4 py-2 rounded-md hover:bg-opacity-95"
                >
                  Submit
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: 0 }}
                    whileHover={{ x: 20 }}
                    transition={{ type: "spring", stiffness: 120 }}
                  >
                    <HiMiniPaperAirplane />
                  </motion.div>
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </AnimatePresence>
  );
}
