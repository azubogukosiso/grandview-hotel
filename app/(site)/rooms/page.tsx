import Image from "next/image";
import Link from "next/link";

import Header from "@/app/(components)/HeaderComponent";
import Footer from "@/app/(components)/FooterComponent";
import heroImg from "@/public/images/hero_image.jpg";
import roomImg from "@/public/images/fitness_and_wellness.jpg";

const page = () => {
  return (
    <>
      <Header />
      <header className="relative w-full h-[100vh]">
        <main className="absolute z-10 flex flex-col justify-center items-center text-center w-full px-5 font-cinzelDec text-white h-[100vh]">
          <h1 className="text-4xl md:text-5xl">BOOK A ROOM</h1>
          <p className="font-sans text-xl mt-3">
            You are just a few clicks away from booking a wonderful experience
            with us.
          </p>
        </main>
        <Image
          src={heroImg}
          alt="Aerial view of Grandview Hotel and Suites"
          priority={true}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-black opacity-55 w-full h-full"></div>
      </header>

      <div className="text-slate-600 flex flex-col-reverse md:flex-row justify-center items-center py-16">
        <div className="mt-10 md:mt-0 h-[60vh] w-[100%] md:w-[45%] relative">
          <Image
            src={roomImg}
            alt="Aerial view of Grandview Hotel and Suites"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="mx-5"></div>
        <div className="flex flex-col justify-items-center items-center w-[100%] md:w-[45%] md:justify-items-start md:items-start">
          <h1 className="font-cinzelDec mb-5">BASIC</h1>
          <p className="mb-1">$150 a night</p>
          <p className="mb-1">15 rooms currently available</p>
          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM20 14V11C20 9.89543 19.1046 9 18 9H14V14H20ZM8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z" />
            </svg>
            <p>2 beds available</p>
          </span>
          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M9.00065 3C5.68694 3 3.00065 5.68629 3.00065 9V9.35115C1.47959 10.0975 0.633328 11.916 1.2667 13.6578L1.5792 14.5172C1.85802 15.2839 2.00065 16.0935 2.00065 16.9094V19.5C2.00065 20.3284 2.67222 21 3.50065 21H20.5006C21.3291 21 22.0006 20.3284 22.0006 19.5V16.9094C22.0006 16.0935 22.1433 15.2839 22.4221 14.5172L22.7346 13.6578C23.368 11.916 22.5217 10.0975 21.0006 9.35115V9C21.0006 5.68629 18.3144 3 15.0006 3H9.00065ZM19.0006 9.03175C17.3064 9.2618 16.0006 10.7141 16.0006 12.4715L16.0006 14H8.00065V12.4715C8.00065 10.7141 6.69488 9.2618 5.00065 9.03175V9C5.00065 6.79086 6.79151 5 9.00065 5H15.0006C17.2098 5 19.0006 6.79086 19.0006 9V9.03175ZM16.0006 16L16.0006 17H18.0006V12.4715C18.0006 11.6588 18.6595 11 19.4721 11C20.4933 11 21.204 12.0147 20.855 12.9743L20.5425 13.8337C20.184 14.8195 20.0006 15.8604 20.0006 16.9094V19H4.00065V16.9094C4.00065 15.8604 3.81727 14.8195 3.45879 13.8337L3.14629 12.9743C2.79732 12.0147 3.50802 11 4.52917 11C5.34185 11 6.00065 11.6588 6.00065 12.4715V17H8.00065V16H16.0006Z" />
            </svg>
            <p>2 sofas available</p>
          </span>
          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M8.5 7C8.5 8.10457 7.60457 9 6.5 9C5.39543 9 4.5 8.10457 4.5 7C4.5 5.89543 5.39543 5 6.5 5C7.60457 5 8.5 5.89543 8.5 7ZM2.5 7C2.5 9.20914 4.29086 11 6.5 11C8.70914 11 10.5 9.20914 10.5 7C10.5 4.79086 8.70914 3 6.5 3C4.29086 3 2.5 4.79086 2.5 7ZM9 16.5C9 15.1193 7.88071 14 6.5 14C5.11929 14 4 15.1193 4 16.5V19H9V16.5ZM11 21H2V16.5C2 14.0147 4.01472 12 6.5 12C8.98528 12 11 14.0147 11 16.5V21ZM19.5 7C19.5 8.10457 18.6046 9 17.5 9C16.3954 9 15.5 8.10457 15.5 7C15.5 5.89543 16.3954 5 17.5 5C18.6046 5 19.5 5.89543 19.5 7ZM13.5 7C13.5 9.20914 15.2909 11 17.5 11C19.7091 11 21.5 9.20914 21.5 7C21.5 4.79086 19.7091 3 17.5 3C15.2909 3 13.5 4.79086 13.5 7ZM20 16.5C20 15.1193 18.8807 14 17.5 14C16.1193 14 15 15.1193 15 16.5V19H20V16.5ZM13 19V16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5V21H13V19Z" />
            </svg>
            <p>1 - 5 persons</p>
          </span>
          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M0.689453 6.99659C3.78027 4.49704 7.71526 3 11.9999 3C16.2845 3 20.2195 4.49704 23.3104 6.99659L22.0536 8.55252C19.3062 6.3307 15.8085 5 11.9999 5C8.19133 5 4.69356 6.3307 1.94617 8.55252L0.689453 6.99659ZM3.83124 10.8864C6.0635 9.08119 8.90544 8 11.9999 8C15.0944 8 17.9363 9.08119 20.1686 10.8864L18.9118 12.4424C17.023 10.9149 14.6183 10 11.9999 10C9.38151 10 6.97679 10.9149 5.08796 12.4424L3.83124 10.8864ZM6.97304 14.7763C8.34673 13.6653 10.0956 13 11.9999 13C13.9042 13 15.6531 13.6653 17.0268 14.7763L15.7701 16.3322C14.7398 15.499 13.4281 15 11.9999 15C10.5717 15 9.26002 15.499 8.22975 16.3322L6.97304 14.7763ZM10.1148 18.6661C10.63 18.2495 11.2858 18 11.9999 18C12.714 18 13.3698 18.2495 13.885 18.6661L11.9999 21L10.1148 18.6661Z" />
            </svg>
            <p>Free Wi-Fi (General Access)</p>
          </span>
          <button className="font-cinzelDec text-lg px-6 py-3 bg-slate-600 text-white transition-all active:scale-95 hover:bg-slate-700 mt-5">
            More Details
          </button>
        </div>
      </div>

      <div className="text-slate-600 flex flex-col-reverse md:flex-row-reverse justify-center items-center py-16">
        <div className="mt-10 md:mt-0 h-[60vh] w-[100%] md:w-[45%] relative">
          <Image
            src={roomImg}
            alt="Aerial view of Grandview Hotel and Suites"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="mx-5"></div>
        <div className="flex flex-col justify-items-center items-center w-[100%] md:w-[45%] md:justify-items-end md:items-end">
          <h1 className="font-cinzelDec mb-5">PREMIUM</h1>
          <p className="mb-1">$250 a night</p>
          <p className="mb-1">8 rooms currently available</p>
          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM20 14V11C20 9.89543 19.1046 9 18 9H14V14H20ZM8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z" />
            </svg>
            <p>3 beds available</p>
          </span>

          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M9.00065 3C5.68694 3 3.00065 5.68629 3.00065 9V9.35115C1.47959 10.0975 0.633328 11.916 1.2667 13.6578L1.5792 14.5172C1.85802 15.2839 2.00065 16.0935 2.00065 16.9094V19.5C2.00065 20.3284 2.67222 21 3.50065 21H20.5006C21.3291 21 22.0006 20.3284 22.0006 19.5V16.9094C22.0006 16.0935 22.1433 15.2839 22.4221 14.5172L22.7346 13.6578C23.368 11.916 22.5217 10.0975 21.0006 9.35115V9C21.0006 5.68629 18.3144 3 15.0006 3H9.00065ZM19.0006 9.03175C17.3064 9.2618 16.0006 10.7141 16.0006 12.4715L16.0006 14H8.00065V12.4715C8.00065 10.7141 6.69488 9.2618 5.00065 9.03175V9C5.00065 6.79086 6.79151 5 9.00065 5H15.0006C17.2098 5 19.0006 6.79086 19.0006 9V9.03175ZM16.0006 16L16.0006 17H18.0006V12.4715C18.0006 11.6588 18.6595 11 19.4721 11C20.4933 11 21.204 12.0147 20.855 12.9743L20.5425 13.8337C20.184 14.8195 20.0006 15.8604 20.0006 16.9094V19H4.00065V16.9094C4.00065 15.8604 3.81727 14.8195 3.45879 13.8337L3.14629 12.9743C2.79732 12.0147 3.50802 11 4.52917 11C5.34185 11 6.00065 11.6588 6.00065 12.4715V17H8.00065V16H16.0006Z" />
            </svg>
            <p>2 sofas available</p>
          </span>

          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M8.5 7C8.5 8.10457 7.60457 9 6.5 9C5.39543 9 4.5 8.10457 4.5 7C4.5 5.89543 5.39543 5 6.5 5C7.60457 5 8.5 5.89543 8.5 7ZM2.5 7C2.5 9.20914 4.29086 11 6.5 11C8.70914 11 10.5 9.20914 10.5 7C10.5 4.79086 8.70914 3 6.5 3C4.29086 3 2.5 4.79086 2.5 7ZM9 16.5C9 15.1193 7.88071 14 6.5 14C5.11929 14 4 15.1193 4 16.5V19H9V16.5ZM11 21H2V16.5C2 14.0147 4.01472 12 6.5 12C8.98528 12 11 14.0147 11 16.5V21ZM19.5 7C19.5 8.10457 18.6046 9 17.5 9C16.3954 9 15.5 8.10457 15.5 7C15.5 5.89543 16.3954 5 17.5 5C18.6046 5 19.5 5.89543 19.5 7ZM13.5 7C13.5 9.20914 15.2909 11 17.5 11C19.7091 11 21.5 9.20914 21.5 7C21.5 4.79086 19.7091 3 17.5 3C15.2909 3 13.5 4.79086 13.5 7ZM20 16.5C20 15.1193 18.8807 14 17.5 14C16.1193 14 15 15.1193 15 16.5V19H20V16.5ZM13 19V16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5V21H13V19Z" />
            </svg>
            <p>1 - 7 persons</p>
          </span>

          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M0.689453 6.99659C3.78027 4.49704 7.71526 3 11.9999 3C16.2845 3 20.2195 4.49704 23.3104 6.99659L22.0536 8.55252C19.3062 6.3307 15.8085 5 11.9999 5C8.19133 5 4.69356 6.3307 1.94617 8.55252L0.689453 6.99659ZM3.83124 10.8864C6.0635 9.08119 8.90544 8 11.9999 8C15.0944 8 17.9363 9.08119 20.1686 10.8864L18.9118 12.4424C17.023 10.9149 14.6183 10 11.9999 10C9.38151 10 6.97679 10.9149 5.08796 12.4424L3.83124 10.8864ZM6.97304 14.7763C8.34673 13.6653 10.0956 13 11.9999 13C13.9042 13 15.6531 13.6653 17.0268 14.7763L15.7701 16.3322C14.7398 15.499 13.4281 15 11.9999 15C10.5717 15 9.26002 15.499 8.22975 16.3322L6.97304 14.7763ZM10.1148 18.6661C10.63 18.2495 11.2858 18 11.9999 18C12.714 18 13.3698 18.2495 13.885 18.6661L11.9999 21L10.1148 18.6661Z" />
            </svg>
            <p>Free Wi-Fi (General Access)</p>
          </span>
          <button className="font-cinzelDec text-lg px-6 py-3 bg-slate-600 text-white transition-all active:scale-95 hover:bg-slate-700 mt-5">
            More Details
          </button>
        </div>
      </div>

      <div className="text-slate-600 flex flex-col-reverse md:flex-row justify-center items-center py-16">
        <div className="mt-10 md:mt-0 h-[60vh] w-[100%] md:w-[45%] relative">
          <Image
            src={roomImg}
            alt="Aerial view of Grandview Hotel and Suites"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="mx-5"></div>
        <div className="flex flex-col justify-items-center items-center w-[100%] md:w-[45%] md:justify-items-start md:items-start">
          <h1 className="font-cinzelDec mb-5">DELUXE</h1>
          <p className="mb-1">$500 a night</p>
          <p className="mb-1">5 rooms currently available</p>
          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM20 14V11C20 9.89543 19.1046 9 18 9H14V14H20ZM8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z" />
            </svg>
            <p>5 beds available</p>
          </span>

          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M9.00065 3C5.68694 3 3.00065 5.68629 3.00065 9V9.35115C1.47959 10.0975 0.633328 11.916 1.2667 13.6578L1.5792 14.5172C1.85802 15.2839 2.00065 16.0935 2.00065 16.9094V19.5C2.00065 20.3284 2.67222 21 3.50065 21H20.5006C21.3291 21 22.0006 20.3284 22.0006 19.5V16.9094C22.0006 16.0935 22.1433 15.2839 22.4221 14.5172L22.7346 13.6578C23.368 11.916 22.5217 10.0975 21.0006 9.35115V9C21.0006 5.68629 18.3144 3 15.0006 3H9.00065ZM19.0006 9.03175C17.3064 9.2618 16.0006 10.7141 16.0006 12.4715L16.0006 14H8.00065V12.4715C8.00065 10.7141 6.69488 9.2618 5.00065 9.03175V9C5.00065 6.79086 6.79151 5 9.00065 5H15.0006C17.2098 5 19.0006 6.79086 19.0006 9V9.03175ZM16.0006 16L16.0006 17H18.0006V12.4715C18.0006 11.6588 18.6595 11 19.4721 11C20.4933 11 21.204 12.0147 20.855 12.9743L20.5425 13.8337C20.184 14.8195 20.0006 15.8604 20.0006 16.9094V19H4.00065V16.9094C4.00065 15.8604 3.81727 14.8195 3.45879 13.8337L3.14629 12.9743C2.79732 12.0147 3.50802 11 4.52917 11C5.34185 11 6.00065 11.6588 6.00065 12.4715V17H8.00065V16H16.0006Z" />
            </svg>
            <p>3 sofas available</p>
          </span>

          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M8.5 7C8.5 8.10457 7.60457 9 6.5 9C5.39543 9 4.5 8.10457 4.5 7C4.5 5.89543 5.39543 5 6.5 5C7.60457 5 8.5 5.89543 8.5 7ZM2.5 7C2.5 9.20914 4.29086 11 6.5 11C8.70914 11 10.5 9.20914 10.5 7C10.5 4.79086 8.70914 3 6.5 3C4.29086 3 2.5 4.79086 2.5 7ZM9 16.5C9 15.1193 7.88071 14 6.5 14C5.11929 14 4 15.1193 4 16.5V19H9V16.5ZM11 21H2V16.5C2 14.0147 4.01472 12 6.5 12C8.98528 12 11 14.0147 11 16.5V21ZM19.5 7C19.5 8.10457 18.6046 9 17.5 9C16.3954 9 15.5 8.10457 15.5 7C15.5 5.89543 16.3954 5 17.5 5C18.6046 5 19.5 5.89543 19.5 7ZM13.5 7C13.5 9.20914 15.2909 11 17.5 11C19.7091 11 21.5 9.20914 21.5 7C21.5 4.79086 19.7091 3 17.5 3C15.2909 3 13.5 4.79086 13.5 7ZM20 16.5C20 15.1193 18.8807 14 17.5 14C16.1193 14 15 15.1193 15 16.5V19H20V16.5ZM13 19V16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5V21H13V19Z" />
            </svg>
            <p>1 - 10 persons</p>
          </span>

          <span className="flex items-center mb-1">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path d="M0.689453 6.99659C3.78027 4.49704 7.71526 3 11.9999 3C16.2845 3 20.2195 4.49704 23.3104 6.99659L22.0536 8.55252C19.3062 6.3307 15.8085 5 11.9999 5C8.19133 5 4.69356 6.3307 1.94617 8.55252L0.689453 6.99659ZM3.83124 10.8864C6.0635 9.08119 8.90544 8 11.9999 8C15.0944 8 17.9363 9.08119 20.1686 10.8864L18.9118 12.4424C17.023 10.9149 14.6183 10 11.9999 10C9.38151 10 6.97679 10.9149 5.08796 12.4424L3.83124 10.8864ZM6.97304 14.7763C8.34673 13.6653 10.0956 13 11.9999 13C13.9042 13 15.6531 13.6653 17.0268 14.7763L15.7701 16.3322C14.7398 15.499 13.4281 15 11.9999 15C10.5717 15 9.26002 15.499 8.22975 16.3322L6.97304 14.7763ZM10.1148 18.6661C10.63 18.2495 11.2858 18 11.9999 18C12.714 18 13.3698 18.2495 13.885 18.6661L11.9999 21L10.1148 18.6661Z" />
            </svg>
            <p>Free Wi-Fi (In-room)</p>
          </span>
          <button className="font-cinzelDec text-lg px-6 py-3 bg-slate-600 text-white transition-all active:scale-95 hover:bg-slate-700 mt-5">
            More Details
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
