import Image from "next/image";
import Link from "next/link";
import Header from "@/components/home/Header";
import Navigation from "@/components/common/Navigation";
import { Metadata } from 'next'
import Subscribe from "@/components/common/Subscribe";
import Introduction from "@/components/home/Introduction";
import Reach from "@/components/home/Reach";
import Programmes from "@/components/home/Programmes";
import Aboutus from "@/components/home/Aboutus";
import Statistics from "@/components/home/Statistics";

export const metadata: Metadata = {
  title: 'CHASNZ – World Class Construction Health and Safety',
}

export default function Home() {
  return (
    <main className="">
        <Navigation />
        <Header />
        <Introduction />
        <Programmes />
        <Statistics />
        <Reach />
        <Aboutus />
        <Subscribe />
    </main>
  );
}
