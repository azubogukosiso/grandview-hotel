import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/app/(components)/HeaderComponent";
import Footer from "@/app/(components)/FooterComponent";
import SignUp from "@/app/(components)/SignUpComponent";
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
            SIGN UP FOR AN ACCOUNT
          </h1>
          <span className="font-sans text-xl font-light mt-3 mx-3 tracking-normal">
            Create your account if you&apos;ve haven&apos;t created one
            previously. If you have an account,{" "}
            <Link
              href="/signin"
              className="underline inline-flex items-center justify-between"
            >
              sign in here
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

      <section className="flex flex-col justify-center items-center py-16">
        <SignUp />
      </section>

      <Footer />
    </>
  );
};

export default page;
