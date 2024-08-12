"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
// import { useSession } from "next-auth/react";

const HeaderComponent = () => {
  // const { data: session } = useSession();

  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 640;
      const isScrolled = window.scrollY > threshold;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div className="relative">
      <nav
        className={`fixed w-full bg-slate-200 flex flex-col text-slate-600 font-cinzelDec text-center overflow-hidden z-50 transition-all ${
          navOpen ? "h-[100vh]" : "h-0"
        }`}
      >
        <div className="flex justify-between">
          <div
            className="flex items-center hover:bg-black/10 transition-all cursor-pointer p-5"
            onClick={() => setNavOpen(false)}
          >
            <svg
              width="30"
              height="21"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.04"
                y1="22.253"
                x2="22.2532"
                y2="1.03981"
                stroke="#666666"
              />
              <line
                x1="1.74711"
                y1="1.03988"
                x2="22.9603"
                y2="22.2531"
                stroke="#666666"
              />
            </svg>
          </div>

          <div></div>
        </div>

        <div className="flex flex-col justify-center h-full m-0">
          <Link
            href="/"
            className="text-3xl py-5 hover:bg-black/10 transition-all"
          >
            HOME
          </Link>
          <Link
            href="/gallery"
            className="text-3xl py-5 hover:bg-black/10 transition-all"
          >
            GALLERY
          </Link>
          <Link
            href="/rooms"
            className="text-3xl py-5 hover:bg-black/10 transition-all"
          >
            BOOK A ROOM
          </Link>
          <Link
            href="/signin"
            className="text-3xl py-5 hover:bg-black/10 transition-all"
          >
            SIGN IN
          </Link>
          <Link
            href="/signup"
            className="text-3xl py-5 hover:bg-black/10 transition-all"
          >
            SIGN UP
          </Link>
        </div>
      </nav>

      <header
        className={`backdrop-blur-md fixed w-full ${
          scrolled ? "text-slate-600" : "text-white"
        } flex justify-between items-stretch z-40`}
      >
        <div
          className={`flex items-center ${
            scrolled ? "hover:bg-black/10" : "hover:bg-black/30"
          } transition-all cursor-pointer py-4 px-5`}
          onClick={() => setNavOpen(true)}
        >
          <svg
            width="30"
            height="21"
            viewBox="0 0 30 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="0.5"
              x2="30"
              y2="0.5"
              stroke={`${scrolled ? "gray" : "white"}`}
            />
            <line
              y1="10.5"
              x2="30"
              y2="10.5"
              stroke={`${scrolled ? "gray" : "white"}`}
            />
            <line
              y1="20.5"
              x2="30"
              y2="20.5"
              stroke={`${scrolled ? "gray" : "white"}`}
            />
          </svg>
        </div>

        <Link
          href="/"
          className={`font-cinzelDec py-4 px-5 ${
            scrolled ? "hover:bg-black/10" : "hover:bg-black/30"
          } transition-all`}
        >
          <h1>GV</h1>
        </Link>

        {/* {session?.user ? (
          <p className="font-sans">session.user.email</p>
        ) : ( */}
        <Link
          href="/signin"
          className={`font-cinzelDec p-3 mr-3 ${
            scrolled
              ? "hover:bg-black/10 border-slate-600"
              : "hover:bg-black/30"
          } border-b text-sm flex items-center my-3 transition-all`}
        >
          <p>SIGN IN</p>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1"
            height="16"
            width="16"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </Link>
        {/* )} */}
      </header>
    </div>
  );
};

export default HeaderComponent;
