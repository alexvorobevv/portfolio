import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >=90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100] px-3" : "fixed w-full h-20 z-[100] px-3"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>ALEX</div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm border-b border-[gray] border-opacity-0 uppercase hover:border-opacity-50">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm border-b border-opacity-0 border-[gray] uppercase hover:border-opacity-50">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm border-b border-opacity-0 border-[gray] uppercase hover:border-opacity-50">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm border-b border-opacity-0 border-[gray] uppercase hover:border-opacity-50">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm border-b border-opacity-0 border-[gray] uppercase hover:border-opacity-50">
                Contact
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-7 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-7 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div>ALEX</div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>

              <div className="flex items-center justify-start gap-4 my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillGithub />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillMail />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;