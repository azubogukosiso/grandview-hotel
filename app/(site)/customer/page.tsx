import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/app/(components)/HeaderComponent";
import Footer from "@/app/(components)/FooterComponent";
import CustomerDashboard from "@/app/(components)/CustomerDashboardComponent";
import heroImg from "@/public/images/hero_image.jpg";

const page = async () => {
  const session: any = await getServerSession(authOptions);

  console.log("session here: ", session);

  if (session?.user?.role !== "customer") {
    redirect("/");
  }
  return (
    <>
      <Header />
      <header className="relative w-full h-[50vh]">
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
      <CustomerDashboard userDetails={session.user} />
      <Footer />
    </>
  );
};

export default page;
