import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <Image src={logo} alt="logo" width={40} height={40} />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li className="transform ease-in-out delay-150 hover:-translate-y-1 duration-300">
                <Link className="text-xl text-gray-600" href="#">
                  About
                </Link>
              </li>
              <li className="transform ease-in-out delay-150 hover:-translate-y-1 duration-300">
                <Link className="text-xl text-gray-600" href="#">
                  Contact-us
                </Link>
              </li>
              <li className="transform ease-in-out delay-150 hover:-translate-y-1 duration-300">
                <Link className="text-xl font-medium text-gray-600" href="#">
                  Support-us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-primary-600 w-32 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-primary-800"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 w-32 px-5 py-2.5 text-center text-sm font-medium text-primary-600 transition hover:text-primary-800 sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
