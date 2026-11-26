import { Link } from "react-router";
import mypic from "../Assets/MY.jpg";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left Side - Introduction */}
        <div className="text-center lg:text-left">
          <p className="mb-5 font-semibold tracking-[4px] text-peach">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl xl:text-6xl">
            Hi, I'm <span className="text-peach">Yaser MORTAZA</span>
          </h1>

          <h2 className="mt-5 text-2xl font-bold text-crimson sm:text-3xl">
            Front-End Developer
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg lg:mx-0">
            I build modern, responsive, and user-friendly web experiences with
            clean code, creative design, and attention to detail.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              to="/project"
              className="rounded-lg bg-linear-to-r from-burgundy to-crimson px-7 py-3 font-semibold text-white shadow-lg shadow-crimson/20 transition duration-300 hover:-translate-y-1 hover:shadow-crimson/40"
            >
              Explore My Work
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-peach/60 px-7 py-3 font-semibold text-peach transition duration-300 hover:bg-peach hover:text-midnight"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex justify-center gap-6 text-2xl lg:justify-start">
            <a
              href="https://github.com/YaserHotak2004-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-peach"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591192395276"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-peach"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href="https://wa.me/93730942171"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-peach"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-5 rounded-full bg-linear-to-br from-burgundy via-crimson to-peach opacity-30 blur-2xl"></div>

            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-peach/70 shadow-2xl shadow-burgundy/40 sm:h-96 sm:w-96">
              <img
                src={mypic}
                alt="Yaser MORTAZA"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-3 rounded-xl border border-slate bg-navy px-5 py-3 shadow-xl">
              <p className="text-sm font-semibold text-peach">
                Front-End Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
