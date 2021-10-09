import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ContentTemplate from "../components/layouts/ContentTempalte";
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <ContentTemplate>
      <Head>
        <title>หน้าแรก</title>
      </Head>
      <Navbar />
      <div className="pt-24 bg-red-800">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Squid Game
            </h1>
            <p className="leading-normal text-2xl mb-8">오징어게임</p>

            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </ContentTemplate>
  );
}
