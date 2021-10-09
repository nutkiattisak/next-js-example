import Link from "next/link";
import Image from "next/image";
import { render } from "react-dom";
import Router from "next/router";

const handleClickIndex = () =>
  Router.push({
    pathname: "/",
  });

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image
            onClick={() => handleClickIndex()}
            src="/logo.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white uppercase hover:text-white mr-4">
              <Link href="/about">about</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white uppercase hover:text-white mr-4">
              <Link href="/game">game</Link>
            </li>
          </div>
          <div>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-red mt-4 lg:mt-0">
              <Link href="/login">LOGIN</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
