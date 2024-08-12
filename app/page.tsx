import Link from "next/link";
import Image from "next/image";

import Header from "@/app/(components)/HeaderComponent";
import Footer from "@/app/(components)/FooterComponent";
import heroImg from "@/public/images/hero_image.jpg";
import originsImg from "@/public/images/origins_of_the_view.jpg";
import fitnessImg from "@/public/images/fitness_and_wellness.jpg";
import culinaryImg from "@/public/images/culinary.jpg";
import adventureImg from "@/public/images/adventures_and_events.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <header className="relative w-full h-[100vh] flex justify-center">
        <main className="absolute z-10 flex flex-col justify-center items-center text-center w-full font-cinzelDec text-white h-full">
          <div>
            <h4 className="text-base md:text-lg md:text-left">
              WELCOME TO THE
            </h4>
            <h1 className="text-7xl md:text-8xl">
              Grand
              <br className="md:hidden" />
              View
            </h1>
            <h4 className="text-base md:text-lg md:text-right">
              HOTEL & SUITES
            </h4>
          </div>

          <div className="flex flex-col md:flex-row md:justify-evenly mt-10 w-[50%] md:w-full">
            <Link
              href="/rooms"
              className="font-cinzelDec p-3 hover:bg-black/30 border-b text-sm md:text-lg flex items-center justify-between my-3 transition-all"
            >
              <p>BOOK A ROOM</p>
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

            <Link
              href="/signup"
              className="font-cinzelDec p-3 hover:bg-black/30 border-b text-sm md:text-lg flex items-center justify-between my-3 transition-all"
            >
              <p>SIGN UP</p>
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
          </div>
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

      <div className="text-slate-600 flex flex-col justify-center items-center px-10 py-16">
        <h1 className="font-cinzelDec -tracking-[0.1em]">
          ORIGINS OF THE VIEW
        </h1>
        <p className="font-sans mt-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          explicabo sequi laboriosam illo, perspiciatis commodi aperiam ex
          ducimus similique, iure non autem, quisquam doloribus soluta mollitia
          est dolores ratione cupiditate? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Tenetur maxime cumque sunt eos facilis
          exercitationem quos debitis, eius sint nesciunt temporibus veritatis
          omnis molestiae, labore enim dolor dolorum ex voluptas.
        </p>
        <div className="my-3"></div>
        <p className="font-sans text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          consectetur rem ad corporis excepturi, ipsa deleniti, voluptatum
          dolorum recusandae voluptatibus sequi minima ipsum unde itaque maxime
          quaerat iusto, reiciendis quam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Neque in quam, vitae non consequuntur
          harum veritatis quasi iste dolorem. Quidem libero suscipit reiciendis
          odit cumque ut. Aliquid quos est facere.
        </p>
      </div>

      <div className="h-[60vh] relative">
        <Image
          src={originsImg}
          alt="Aerial view of Grandview Hotel and Suites"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="px-8 py-16 text-slate-600 flex flex-col md:flex-row md:justify-around md:items-center">
        <div className="md:w-[45%]">
          <h1 className="font-cinzelDec -tracking-[0.1em] text-center md:text-left">
            FITNESS AND WELLNESS
          </h1>
          <p className="font-sans mt-3 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            explicabo sequi laboriosam illo, perspiciatis commodi aperiam ex
            ducimus similique, iure non autem, quisquam doloribus soluta
            mollitia est dolores ratione cupiditate? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Tenetur maxime cumque sunt eos facilis
            exercitationem quos debitis, eius sint nesciunt temporibus veritatis
            omnis molestiae, labore enim dolor dolorum ex voluptas.
          </p>
          <div className="my-3"></div>
          <p className="font-sans text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur consectetur rem ad corporis excepturi, ipsa deleniti,
            voluptatum dolorum recusandae voluptatibus sequi minima ipsum unde
            itaque maxime quaerat iusto, reiciendis quam. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Neque in quam, vitae non
            consequuntur harum veritatis quasi iste dolorem. Quidem libero
            suscipit reiciendis odit cumque ut. Aliquid quos est facere.
          </p>
        </div>

        <div className="h-[60vh] relative mt-10 md:w-[45%]">
          <Image
            src={fitnessImg}
            alt="Aerial view of Grandview Hotel and Suites"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="px-8 md:px-0 py-16 text-slate-600 flex flex-col md:flex-row-reverse md:justify-between md:items-center">
        <div className="md:w-[10%]"></div>
        <div className="md:w-[55%]">
          <h1 className="font-cinzelDec -tracking-[0.1em] text-center md:text-left">
            CULINARY
          </h1>
          <p className="font-sans mt-3 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            explicabo sequi laboriosam illo, perspiciatis commodi aperiam ex
            ducimus similique, iure non autem, quisquam doloribus soluta
            mollitia est dolores ratione cupiditate? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Tenetur maxime cumque sunt eos facilis
            exercitationem quos debitis, eius sint nesciunt temporibus veritatis
            omnis molestiae, labore enim dolor dolorum ex voluptas.
          </p>
          <div className="my-3"></div>
          <p className="font-sans text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur consectetur rem ad corporis excepturi, ipsa deleniti,
            voluptatum dolorum recusandae voluptatibus sequi minima ipsum unde
            itaque maxime quaerat iusto, reiciendis quam. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Neque in quam, vitae non
            consequuntur harum veritatis quasi iste dolorem. Quidem libero
            suscipit reiciendis odit cumque ut. Aliquid quos est facere.
          </p>
        </div>

        <div className="h-[60vh] md:h-[100vh] relative mt-10 md:w-[30%]">
          <Image
            src={culinaryImg}
            alt="Aerial view of Grandview Hotel and Suites"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="text-slate-600 flex flex-col justify-center items-center px-10 py-16">
        <h1 className="font-cinzelDec -tracking-[0.1em] text-center md:text-left">
          ADVENTURES AND EVENTS
        </h1>
        <p className="font-sans mt-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          explicabo sequi laboriosam illo, perspiciatis commodi aperiam ex
          ducimus similique, iure non autem, quisquam doloribus soluta mollitia
          est dolores ratione cupiditate? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Tenetur maxime cumque sunt eos facilis
          exercitationem quos debitis, eius sint nesciunt temporibus veritatis
          omnis molestiae, labore enim dolor dolorum ex voluptas.
        </p>
        <div className="my-3"></div>
        <p className="font-sans text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          consectetur rem ad corporis excepturi, ipsa deleniti, voluptatum
          dolorum recusandae voluptatibus sequi minima ipsum unde itaque maxime
          quaerat iusto, reiciendis quam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Neque in quam, vitae non consequuntur
          harum veritatis quasi iste dolorem. Quidem libero suscipit reiciendis
          odit cumque ut. Aliquid quos est facere.
        </p>
      </div>

      <div className="h-[60vh] relative">
        <Image
          src={adventureImg}
          alt="Aerial view of Grandview Hotel and Suites"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="px-10 py-16 text-slate-600 flex flex-col items-center justify-center">
        <h1 className="font-cinzelDec -tracking-[0.1em]">CONTACT US</h1>
        <p className="font-sans text-center mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          consectetur rem ad corporis excepturi, ipsa deleniti, voluptatum
          dolorum recusandae voluptatibus sequi minima ipsum unde itaque maxime
          quaerat iusto, reiciendis quam.
        </p>
        <Link
          href="#"
          className="font-cinzelDec p-3 mr-3 hover:bg-black/10 border-b border-slate-600 text-lg flex items-center my-2 transition-all"
        >
          <p>CONTACT US</p>
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
      </div>

      <Footer />
    </>
  );
}
