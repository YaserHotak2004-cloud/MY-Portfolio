export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-ocean/10 bg-[#02235d] px-6 py-8 md:px-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-sapphire/10 blur-[120px]"></div>

      {/* Top Gradient Line */}
      <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-ocean/50 to-transparent"></div>

      {/* Contact & Social Links */}
      <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
        {/* Email */}
        <a
          href="mailto:yasermurtaza@gmail.com"
          className="group flex items-center gap-2 font-inter text-sm text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-jade"
        >
          <i className="fa-solid fa-envelope text-lg text-ocean transition-colors duration-300 group-hover:text-jade"></i>
          Email
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/93730942171"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-inter text-sm text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-jade"
        >
          <i className="fa-brands fa-whatsapp text-lg text-ocean transition-colors duration-300 group-hover:text-jade"></i>
          WhatsApp
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/YaserHotak2004-cloud"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-inter text-sm text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-jade"
        >
          <i className="fa-brands fa-github text-lg text-ocean transition-colors duration-300 group-hover:text-jade"></i>
          GitHub
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61591192395276"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-inter text-sm text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-jade"
        >
          <i className="fa-brands fa-facebook text-lg text-ocean transition-colors duration-300 group-hover:text-jade"></i>
          Facebook
        </a>
      </div>

      {/* Divider */}
      <div className="relative my-7 h-px w-full bg-linear-to-r from-transparent via-ocean/20 to-transparent"></div>

      {/* Footer Bottom */}
      <div className="relative flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
        {/* Copyright */}
        <p className="font-inter text-xs text-white/40">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-jade">Yaser MORTAZA</span>. All
          Rights Reserved.
        </p>

        {/* Developer Credit */}
        <p className="font-inter text-xs text-white/40">
          Designed & Developed with{" "}
          <i className="fa-solid fa-heart mx-1 text-jade"></i>
          by <span className="font-semibold text-ocean">Yaser</span>
        </p>
      </div>
    </footer>
  );
}
