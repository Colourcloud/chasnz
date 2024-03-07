import Image from "next/image";
import Link from "next/link";
import Header from "@/components/home/Header";
import Navigation from "@/components/common/Navigation";

export default function Home() {
  return (
    <main className="">
        <Navigation />
       <Header />
    </main>
  );
}
