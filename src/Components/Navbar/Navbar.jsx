// import { Link } from "react-router";
// import mypic from "../Assets/mypic.webp";
// import portVideo from "../Assets/c24dcfc9f7c5d0463893f71a972aab76.mp4";
// export default function Navbar() {
//   return (
//     <div>
//       <aside className="flex flex-col p-5 w-64 min-h-screen fixed bg-sapphire justify-between">
//         <div>
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <img
//               src={mypic}
//               alt="Yaser Profile"
//               className="rounded-full h-12 w-12 p-[1px] bg-jade"
//             />

//             <h1 className="font-inter font-extrabold text-2xl text-jade">
//               Yaser
//               <span className="font-Agrave italic text-[14px] text-ocean ml-1">
//                 MORTAZA
//               </span>
//             </h1>
//           </div>
//           {/* Navigation Links */}
//           <div className="flex flex-col gap-2  p-1 ml-6 mt-9">
//             <Link
//               to="/"
//               className="flex items-center gap-3 text-[13px] text-ocean hover:text-jade transition-all hover:bg-ocean/10 duration-300 ease-in-out p-2 rounded-[9px]"
//             >
//               <i className="fa-solid fa-house w-5"></i>
//               Home
//             </Link>

//             <Link
//               to="/About"
//               className="flex items-center gap-3 text-[13px] text-ocean hover:text-jade transition-all hover:bg-ocean/10 duration-300 ease-in-out p-2 rounded-[9px]"
//             >
//               <i className="fa-solid fa-user w-5"></i>
//               About
//             </Link>

//             <Link
//               to="/Project"
//               className="flex items-center gap-3 text-[13px] text-ocean hover:text-jade transition-all hover:bg-ocean/10 duration-300 ease-in-out p-2 rounded-[9px]"
//             >
//               <i className="fa-solid fa-folder-open w-5"></i>
//               Project
//             </Link>

//             <Link
//               to="/Contact"
//               className="flex items-center gap-3 text-[13px] text-ocean hover:text-jade transition-all hover:bg-ocean/10 duration-300 ease-in-out p-2 rounded-[9px]"
//             >
//               <i className="fa-solid fa-envelope w-5"></i>
//               Contact
//             </Link>
//           </div>
//         </div>

//         <div className="border h-[270px] mt-9 ">
//           <div className="w-[200px] h-[150px] overflow-hidden">
//             <video
//               src={portVideo}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </div>
//           <p className="text-ocean py-3">Follow me</p>
//           <div className=" ">
//             <a
//               href="https://www.facebook.com/profile.php?id=61591192395276"
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-2  text-ocean hover:text-jade transition-all duration-300 "
//             >
//               <i className="fa-brands fa-facebook "></i>
//               <span className="text-[10px]">Facebook</span>
//             </a>

//             <a
//               href="https://github.com/YaserHotak2004-cloud"
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-2 text text-ocean hover:text-jade transition-all duration-300 mt-[10px]"
//             >
//               <i className="fa-brands fa-github "></i>
//               <span className="text-[10px]">GitHub</span>
//             </a>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// }

import { Link, useLocation } from "react-router";
import mypic from "../Assets/mypic.webp";
import portVideo from "../Assets/c24dcfc9f7c5d0463893f71a972aab76.mp4";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: "fa-house" },
    { name: "About", path: "/About", icon: "fa-user" },
    { name: "Project", path: "/Project", icon: "fa-folder-open" },
    { name: "Contact", path: "/Contact", icon: "fa-envelope" },
  ];

  const [menuopen, setmenuopen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-midnight px-5 md:hidden">
        {/* Profile / Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={mypic}
            alt="Yaser Profile"
            className="h-10 w-10 rounded-full border-2 border-peach"
          />

          <h1 className="text-xl font-bold text-peach">
            Yaser
            <span className="ml-1 text-sm italic text-crimson">MORTAZA</span>
          </h1>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setmenuopen(!menuopen)}
          className="text-2xl text-peach"
        >
          <i className={`fa-solid ${menuopen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </header>

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64
  bg-navy p-5 transition-transform duration-300
  ${menuopen ? "translate-x-0" : "-translate-x-full"}
  md:translate-x-0`}
      >
        {/* Profile / Logo */}
        <div>
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={mypic}
              alt="Yaser Profile"
              className="h-12 w-12 rounded-full border-2 border-peach object-cover shadow-lg shadow-peach/20 transition-transform duration-300 group-hover:scale-110"
            />

            <h1 className="font-inter text-2xl font-extrabold text-peach">
              Yaser
              <span className="ml-1 font-agrave text-[14px] italic text-crimson">
                MORTAZA
              </span>
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="mt-12 flex flex-col gap-3 px-2">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center gap-3 rounded-xl p-3 text-[13px] transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-l from-burgundy/40 to-crimson/20 text-peach shadow-md shadow-burgundy/20"
                      : "text-peach hover:bg-crimson/10 hover:pl-5 hover:text-white"
                  }`}
                >
                  <i
                    className={`fa-solid ${item.icon} w-5 text-center text-base transition-transform duration-300 group-hover:scale-110`}
                  ></i>

                  <span className="font-inter font-medium">{item.name}</span>

                  {isActive && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-peach shadow-[0_0_10px_#FDA481]"></span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Video and Social Links */}
        <div className="border-t border-slate/20 pt-5">
          <div className="mb-5 hidden overflow-hidden rounded-xl border border-slate/20 shadow-lg shadow-burgundy/20 min-[481px]:block">
            <video
              src={portVideo}
              autoPlay
              muted
              loop
              playsInline
              className="h-32 w-full object-cover"
            />
          </div>

          <p className="mb-4 font-inter text-sm font-semibold tracking-wide text-peach">
            Follow Me
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61591192395276"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-peach transition-all duration-300 hover:translate-x-2 hover:text-white"
            >
              <i className="fa-brands fa-facebook text-lg"></i>
              <span className="font-inter text-xs">Facebook</span>
            </a>

            <a
              href="https://github.com/YaserHotak2004-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-peach transition-all duration-300 hover:translate-x-2 hover:text-white"
            >
              <i className="fa-brands fa-github text-lg"></i>
              <span className="font-inter text-xs">GitHub</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
