import Head from "next/head";

import Navbar from "../components/Navbar";

export default function Game() {
  return (
    <div>
      <Head>
        <title>Game</title>
      </Head>
      <Navbar />

      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Game
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
    </div>
  );
}
