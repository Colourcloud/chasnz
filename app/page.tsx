import Image from "next/image";
import Link from "next/link";
import Header from "@/components/home/Header";
import Navigation from "@/components/common/Navigation";
import { Metadata } from 'next'
import Subscribe from "@/components/common/Subscribe";

export const metadata: Metadata = {
  title: 'CHASNZ – World Class Construction Health and Safety',
}

export default function Home() {
  return (
    <main className="">
        <Navigation />
        <Header />
        <Subscribe />
    </main>
  );
}
