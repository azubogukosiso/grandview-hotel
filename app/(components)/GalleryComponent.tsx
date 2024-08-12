"use client";

import Link from "next/link";
import Image from "next/image";

import heroImg from "@/public/images/hero_image.jpg";

const GalleryComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-10">
      <Link href="#" className="relative h-[50vh] group md:col-span-2">
        <Image
          src={heroImg}
          alt="Aerial view of Grandview Hotel and Suites"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-t from-black to-100% h-full w-full p-5 flex flex-col items-start justify-end absolute font-cinzelDec text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h1 className="text-xl">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm font-nanum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque
            atque quia, similique vitae autem esse error optio.
          </p>
        </div>
      </Link>
      <Link href="#" className="relative h-[50vh] group">
        <Image
          src={heroImg}
          alt="Aerial view of Grandview Hotel and Suites"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-t from-black to-100% h-full w-full p-5 flex flex-col items-start justify-end absolute font-cinzelDec text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h1 className="text-xl">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm font-nanum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque
            atque quia, similique vitae autem esse error optio.
          </p>
        </div>
      </Link>
      <Link href="#" className="relative h-[50vh] group">
        <Image
          src={heroImg}
          alt="Aerial view of Grandview Hotel and Suites"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-t from-black to-100% h-full w-full p-5 flex flex-col items-start justify-end absolute font-cinzelDec text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h1 className="text-xl">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm font-nanum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque
            atque quia, similique vitae autem esse error optio.
          </p>
        </div>
      </Link>
      <Link href="#" className="relative h-[50vh] group">
        <Image
          src={heroImg}
          alt="Aerial view of Grandview Hotel and Suites"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-t from-black to-100% h-full w-full p-5 flex flex-col items-start justify-end absolute font-cinzelDec text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h1 className="text-xl">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm font-nanum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque
            atque quia, similique vitae autem esse error optio.
          </p>
        </div>
      </Link>
      <Link href="#" className="relative h-[50vh] group">
        <Image
          src={heroImg}
          alt="Aerial view of Grandview Hotel and Suites"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-t from-black to-100% h-full w-full p-5 flex flex-col items-start justify-end absolute font-cinzelDec text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h1 className="text-xl">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm font-nanum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque
            atque quia, similique vitae autem esse error optio.
          </p>
        </div>
      </Link>
      <Link href="#" className="relative h-[50vh] group md:col-span-2">
        <Image
          src={heroImg}
          alt="Aerial view of Grandview Hotel and Suites"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-t from-black to-100% h-full w-full p-5 flex flex-col items-start justify-end absolute font-cinzelDec text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h1 className="text-xl">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm font-nanum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque
            atque quia, similique vitae autem esse error optio.
          </p>
        </div>
      </Link>
      <Link href="#" className="relative h-[50vh] group md:col-span-2">
        <Image
          src={heroImg}
          alt="Aerial view of Grandview Hotel and Suites"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-t from-black to-100% h-full w-full p-5 flex flex-col items-start justify-end absolute font-cinzelDec text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h1 className="text-xl">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm font-nanum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque
            atque quia, similique vitae autem esse error optio.
          </p>
        </div>
      </Link>
      <Link href="#" className="relative h-[50vh] group">
        <Image
          src={heroImg}
          alt="Aerial view of Grandview Hotel and Suites"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-t from-black to-100% h-full w-full p-5 flex flex-col items-start justify-end absolute font-cinzelDec text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h1 className="text-xl">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm font-nanum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque
            atque quia, similique vitae autem esse error optio.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default GalleryComponent;
