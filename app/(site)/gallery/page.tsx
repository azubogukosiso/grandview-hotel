import Image from "next/image";

import Header from "@/app/(components)/HeaderComponent";
import Footer from "@/app/(components)/FooterComponent";
import Gallery from "@/app/(components)/GalleryComponent";
import heroImg from "@/public/images/hero_image.jpg";

const page = () => {
  return (
    <>
      <div className="absolute w-full h-[100vh] -z-20">
        <Image
          src={heroImg}
          alt="Aerial view of Grandview Hotel and Suites"
          priority={true}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-black opacity-55 w-full h-full"></div>
      </div>
      <Header />
      <div className="flex flex-col items-center justify-center font-cinzelDec text-white h-[100vh]">
        <main className="flex flex-col md:justify-center md:items-center text-center md:w-[60%]">
          <h1 className="text-4xl md:text-5xl">OUR GALLERY</h1>
          <span className="font-sans text-xl font-light mt-3 mx-3 tracking-normal">
            Enjoy an immersive tour of the beauties of the view.
          </span>
        </main>
      </div>
      <Gallery />
      <Footer />
    </>
  );
};

export default page;
