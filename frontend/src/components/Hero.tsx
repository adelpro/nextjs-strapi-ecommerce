import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold sm:text-4xl">
            Empower Your Shopping Experience!{" "}
            <strong className="font-extrabold text-primary-800 sm:block">
              Welcome to Convenience.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Explore our digital marketplace for a seamless shopping journey.
            Find what you need, when you need it, effortlessly.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary-800 focus:outline-none focus:ring active:bg-primary-400 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary-600 shadow hover:text-primary-800 focus:outline-none focus:ring active:text-primay-400 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
