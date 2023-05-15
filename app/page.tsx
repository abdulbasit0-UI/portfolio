"use client";
import Skills from "@/components/skills/Skills";
import { Shapes } from "../components/shapes/Shapes";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";
import Head from "next/head";
import { transition } from "../settings";
import Image from "next/image";
import {
  FaSun,
  FaRegMoon,
  FaFileWord,
  FaProjectDiagram,
  FaEnvelopeOpenText,
  FaPhoneAlt,
} from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Suspense, useState } from "react";
import useMeasure from "react-use-measure";
import Project from "@/components/projects/Project";
import Link from "next/link";
export default function Home() {
  const { theme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Abdulbasit Hussain - Portfolio</title>
        <link
          href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="
        https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap"
        />
      </Head>
      <main>
        <header>
          <nav className=" flex flex-col sm:flex-row  sm:items-center  justify-between  px-6 py-4 sm:py-6 sm:px-28 md:px-5 lg:px-10 shadow-md dark:bg-secondary">
            <div className="flex items-center justify-between">
              <h4 className="font-medium w-full my-0 uppercase text-2xl sm:text-3xl sm:tracking-wider">
                Abdul basit
              </h4>
              <div className="float-right">
                <BiMenuAltLeft
                  onClick={
                    showMenu == true
                      ? () => setShowMenu(false)
                      : showMenu == false
                      ? () => setShowMenu(true)
                      : () => setShowMenu(false)
                  }
                  className="sm:hidden text-2xl"
                />
              </div>
            </div>
            <div>
              <ul
                className={`items-start transition-all ${
                  showMenu == false ? "hidden" : ""
                } sm:flex sm:items-center  flex-col sm:flex-row sm:mr-4`}
              >
                <li className="sm:mx-3 my-3 sm:my-0">
                  <Link href="/">Home</Link>
                </li>
                <li className="sm:mx-3 my-3 sm:my-0">
                  <Link href="#aboutme">About Me</Link>
                </li>
                <li className="sm:mx-3 my-3 sm:my-0">
                  <Link href="#skills">Skills</Link>
                </li>
                <li className="sm:mx-3 my-3 sm:my-0">
                  <Link href="#projects">Projects</Link>
                </li>
                <li className="sm:mx-3 my-3 sm:my-0">
                  <Link href="#education">Education</Link>
                </li>
                <li className="sm:mx-3 my-3 sm:my-0">
                  <Link href="#contact">Contact</Link>
                </li>
                <button
                  className="ml-4"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? <FaSun /> : <FaRegMoon />}
                </button>
              </ul>
            </div>
          </nav>
        </header>
        <section className="sm:h-screen md:h-screenMd lg:h-screenLg h-screenSm flex flex-col sm:flex-row items-center sm:justify-between justify-center sm:pr-28 md:pr-5">
          <div
            className="bg-hero hidden sm:block bg-cover bg-center h-full sm:w-11/12 md:w-full"
            style={{ clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)" }}
          ></div>
          <div className="md:w-full w-full">
            {/* <MotionConfig transition={transition}>
              <motion.button
                ref={ref}
                initial={false}
                animate={isHover ? "hover" : "rest"}
                whileTap="press"
                variants={{
                  rest: { scale: 3 },
                  hover: { scale: 5.5 },
                  press: { scale: 1.4 },
                }}
                onHoverStart={() => {
                  resetMousePosition();
                  setIsHover(true);
                }}
                onHoverEnd={() => {
                  resetMousePosition();
                  setIsHover(false);
                }}
                onTapStart={() => setIsPress(true)}
                onTap={() => setIsPress(false)}
                onTapCancel={() => setIsPress(false)}
                onPointerMove={(e) => {
                  mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                  mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                }}
              >
                <motion.div
                  className="shapes"
                  variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 1 },
                  }}
                >
                  <div className="pink blush" />
                  <div className="blue blush" />
                  <div className="container">
                    <Suspense fallback={null}>
                      <Shapes
                        isHover={isHover}
                        isPress={isPress}
                        mouseX={mouseX}
                        mouseY={mouseY}
                      />
                    </Suspense>
                  </div>
                </motion.div>
                <motion.div
                  variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
                  className="label"
                ></motion.div>
              </motion.button>
            </MotionConfig> */}
            <motion.div
              animate={{ scale: [0, 1] }}
              initial={false}
              transition={{ ease: "easeInOut", duration: 1 }}
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
              }}
            >
              <h1 className="font-bold font-Josefin md:text-4xl sm:text-7xl text-3xl lg:text-7xl text-center sm:text-left tracking-wide mb-10 capitalize">
                Full-stack javascript <br /> web engineer
              </h1>
            </motion.div>
            <div className="flex items-center sm:justify-start justify-center">
              <Link
                href="#projects"
                className="bg-blue-500 hover:bg-white text-white transition-all hover:text-secondary items-center px-3 sm:px-10 py-3 flex sm:py-4 md:py-4 md:px-10 sm:mt-8  w-fit rounded-lg sm:rounded-full"
              >
                <FaProjectDiagram className="mr-3" /> Projects
              </Link>
              <Link
                href="#"
                className="bg-blue-500 ml-3 hover:bg-white text-white transition-all  hover:text-secondary items-center px-3 sm:px-10 py-3 flex sm:py-4 sm:mt-8  md:py-4 md:px-10  w-fit rounded-lg sm:rounded-full"
              >
                <FaFileWord className="mr-3" /> Download Resume
              </Link>
            </div>
          </div>
        </section>

        <section
          id="aboutme"
          className="flex my-20 items-center sm:flex-row flex-col justify-between sm:px-28 md:px-10 lg:px-20"
        >
          <div className="w-1/2 sm:w-1/3">
            <Image
              alt="Profile Pic"
              className="rounded-full"
              width={600}
              height={100}
              src="/profile-pic.jpg"
            />
          </div>
          <div className="sm:w-3/5 w-3/4">
            <h4 className="font-bold text-5xl text-blue-500 my-10">
              About Me...
            </h4>
            <p>
              I am a fullstack web developer with four years of experience in
              the industry. With a strong background in HTML, CSS, JavaScript,
              Next JS, TypeScript, and Node, I am able to create complex and
              dynamic web applications that meet the needs of clients and
              end-users alike. As a fullstack developer, skilled in both
              front-end and back-end development, and have a keen eye for detail
              and a talent for problem-solving.
            </p>
            <br />
            <p>
              I have a proven track record of success in developing and
              deploying high-quality web applications, and is committed to
              staying up-to-date with the latest trends and technologies in the
              field. With me on the team, clients can rest assured that their
              web development needs will be met with expertise, professionalism,
              and dedication.
            </p>
            {theme === "dark" ? (
              <Image
                src="/signature-ab.png"
                width={250}
                className="mt-10"
                height={250}
                alt="signature"
              />
            ) : (
              <Image
                src="/signature-dark.png"
                width={250}
                className="mt-10"
                height={250}
                alt="signature"
              />
            )}
          </div>
        </section>

        <section id="skills" className="sm:px-28 px-5 my-20 md:px-10 lg:px-20">
          <h2 className="text-center font-Josefin font-bold text-3xl mb-10">
            Skills (Front-end)
          </h2>
          <div className="grid sm:grid-cols-6 md:grid-cols-3 lg:grid-cols-5 grid-cols-2 sm:gap-9 gap-5">
            <Skills title="Html" imageUrl={"html-logo.png"} />
            <Skills title="Css" imageUrl={"css-logo.png"} />
            <Skills title="Sass" imageUrl={"sass-logo.png"} />
            <Skills title="Bootstrap" imageUrl={"bootstrap-logo-1.png"} />
            <Skills
              title="Next Js"
              imageUrl={
                theme === "dark" ? "nextjs-logo.svg.png" : "next-logo.png"
              }
            />
            <Skills title="Git" imageUrl={"git-logo-1.png"} />
            <Skills title="React" imageUrl={"react-logo.png"} />
            <Skills title="Progresive Web Apps" imageUrl={"pwa-icon.webp"} />
            <Skills title="Testing" imageUrl={"testing-logo.png"} />
            <Skills title="Typescript" imageUrl={"typescript-logo.png"} />
            <Skills
              title="Single Page Apps"
              imageUrl={"single-page-logo.png"}
            />
            <Skills
              title="Cross Browser Compatiblity"
              imageUrl={"cross-browser-logo.png"}
            />
          </div>
        </section>
        <section className="sm:px-28 px-5 my-20 md:px-10 lg:px-20">
          <h2 className="text-center font-Josefin font-bold text-3xl mb-10">
            Skills (Back-end)
          </h2>
          <div className="grid sm:grid-cols-6 md:grid-cols-3  lg:grid-cols-5 grid-cols-2 sm:gap-9 gap-5">
            <Skills title="Node Js" imageUrl={"node-logo.png"} />
            <Skills title="MongoDb" imageUrl={"mongodb-logo-1.png"} />
            <Skills title="AWS" imageUrl={"aws-1.png"} />
            <Skills title="Graphql" imageUrl={"graphql-logo.png"} />
            <Skills title="Express Js" imageUrl={"express-icon-1.png"} />
            <Skills title="Scrapy" imageUrl={"scrapy-icon.png"} />
          </div>
        </section>
        <section
          id="projects"
          className="sm:px-28 px-5 my-20 md:px-10 lg:px-20"
        >
          <h2 className="text-center font-Josefin font-bold text-3xl mb-10">
            Projects
          </h2>
          <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4">
            <Project
              projectImage="portfolio-1.png"
              projectLink="https://carque.co.za"
              prokectTitle="Carque"
            />
            <Project
              projectImage="portfolio-5.png"
              projectLink="https://optimumwellness.co.za/"
              prokectTitle="Optimum Wellness"
            />
            <Project
              projectImage="portfolio-6.png"
              projectLink="https://optimumgold.co.za"
              prokectTitle="Optimum Gold"
            />
            <Project
              projectImage="portfolio-item.png"
              projectLink="#"
              prokectTitle="Realtors"
            />
            <Project
              projectImage="portfolio-item-1.png"
              projectLink="#"
              prokectTitle="Hotel Booking"
            />
            <Project
              projectImage="portfolio-2.png"
              projectLink="#"
              prokectTitle="Weather App"
            />
          </div>
        </section>

        <section
          id="education"
          className="sm:px-28 px-5  md:px-10 my-20 lg:px-20"
        >
          <h2 className="text-center font-Josefin font-bold text-3xl mb-10">
            Education
          </h2>
          <div className="dark:bg-secondary shadow-lg dark:shadow-none rounded-lg flex flex-col sm:flex-row text-center sm:text-left items-center py-5 px-10 lg:px-20">
            <div className="bg-white rounded-lg">
              <Image
                src="/iu-logo.png"
                alt="IU logo"
                width={100}
                height={100}
              />
            </div>
            <div className="sm:ml-5">
              <h4 className="font-bold sm:text-3xl text-2xl my-3 sm:my-0 capitalize">
                international university of applied sciences
              </h4>
              <p>Bachelor in Computer Science - Germany</p>
              <small>2023 - 2025</small>
            </div>
          </div>
          <div className="dark:bg-secondary shadow-lg dark:shadow-none rounded-lg flex mt-4 flex-col sm:flex-row text-center sm:text-left items-center py-5 px-10 lg:px-20">
            <div>
              <Image
                src="/ged-logo.png"
                alt="IU logo"
                width={100}
                height={100}
              />
            </div>
            <div className="ml-5">
              <h4 className="font-bold text-3xl capitalize">GED</h4>
              <p>Matric - South Africa</p>
              <small>2022 - 2023</small>
            </div>
          </div>
        </section>

        <section id="contact" className="sm:px-28 md:px-10 px-5 my-20 lg:px-20">
          <h2 className="text-center font-Josefin font-bold text-3xl mb-10">
            Contact
          </h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            <div className="dark:bg-secondary shadow-lg dark:shadow-none flex  px-5 py-5 items-center justify-center  rounded-lg">
              <FaEnvelopeOpenText className="text-3xl mr-4 text-blue-500" />
              <Link
                href="mailto: habdulbasit51@gmail.com"
                className="font-bold sm:text-3xl text-1xl block"
              >
                Email: habdulbasit51@gmail.com
              </Link>
            </div>
            <div className="dark:bg-secondary flex shadow-lg dark:shadow-none  px-5 py-5 items-center justify-center  rounded-lg">
              <FaPhoneAlt className="text-blue-500 text-3xl mr-4" />
              <Link
                href="tel:+27 73 210 8919"
                className="font-bold sm:text-3xl text-1xl block"
              >
                Cell No: +27 73 210 8919
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="sm:px-28 px-10 dark:bg-secondary shadow-2xl py-5">
        <div className="flex items-center">
          <p>Built By Abdulbasit Hussain with </p>
          <div className="flex mt-3 mb-3">
            <SiTypescript className="mx-2 text-blue-500" />{" "}
            <SiTailwindcss className="mr-2 text-teal-500" />
            <SiReact className="mr-2 text-blue-700" />
          </div>
          <p>
            Check it out on{" "}
            <Link
              href="https://github.com/abdulbasit0-UI/portfolio"
              rel="noreferrer"
              className="text-blue-500"
              target="_blank"
            >
              Github
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
