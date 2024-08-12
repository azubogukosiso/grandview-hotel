import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/app/(components)/HeaderComponent";
import Footer from "@/app/(components)/FooterComponent";
import SignIn from "@/app/(components)/SignInComponent";
import heroImg from "@/public/images/hero_image.jpg";

const page = async () => {
  const session: any = await getServerSession(authOptions);

  if (session?.user?.role === "customer") {
    redirect("/customer");
  }

  return (
    <>
      <Header />
      <header className="relative w-full h-[100vh]">
        {/* HERO TEXT */}
        <main className="absolute z-10 flex flex-col justify-center items-center text-center text-white w-full h-full px-3 md:px-0">
          <h1 className="font-cinzelDec text-4xl md:text-5xl">
            SIGN IN TO YOUR ACCOUNT
          </h1>
          <span className="font-sans text-xl font-light mt-3 mx-3 tracking-normal">
            Access your account if you&apos;ve created one previously. If not,{" "}
            <Link
              href="/signup"
              className="underline inline-flex items-center justify-between"
            >
              sign up here
            </Link>
          </span>
        </main>

        {/* HERO IMG */}
        <Image
          src={heroImg}
          alt="Aerial view of Grandview Hotel and Suites"
          priority={true}
          fill
          style={{ objectFit: "cover" }}
        />

        {/* HERO OVERLAY */}
        <div className="bg-black opacity-55 w-full h-full"></div>
      </header>
      <div className="flex flex-col justify-center items-center py-16">
        <SignIn />
      </div>
      <Footer />
    </>
  );
};

export default page;
