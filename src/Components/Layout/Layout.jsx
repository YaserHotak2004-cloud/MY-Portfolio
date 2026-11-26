import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#080D18]">
      <Navbar />

      {/* Main Page Content */}
      <main className="min-h-screen pt-16 md:ml-64 md:pt-0">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
