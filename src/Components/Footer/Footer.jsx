export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-slate/40 bg-midnight px-6 py-8 md:px-10">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-burgundy/25 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-40 w-40 rounded-full bg-crimson/10 blur-[100px]" />

      {/* Top Gradient Line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-crimson/70 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        {/* Footer Brand */}
        <div className="mb-7 text-center">
          <h2 className="font-agrave text-xl font-bold tracking-wide text-white">
            Yaser <span className="text-peach">MORTAZA</span>
          </h2>

          <p className="mt-2 font-inter text-xs tracking-wide text-white/40">
            Front-End Developer | Building Digital Experiences
          </p>
        </div>

        {/* Contact & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {/* Email */}
          <a
            href="mailto:yasermurtaza1383@gmail.com"
            className="group flex items-center gap-2 font-inter text-sm text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-peach"
          >
            <i className="fa-solid fa-envelope text-lg text-peach/80 transition-colors duration-300 group-hover:text-crimson" />
            Email
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/93730942171"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-inter text-sm text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-peach"
          >
            <i className="fa-brands fa-whatsapp text-lg text-peach/80 transition-colors duration-300 group-hover:text-crimson" />
            WhatsApp
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/YaserHotak2004-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-inter text-sm text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-peach"
          >
            <i className="fa-brands fa-github text-lg text-peach/80 transition-colors duration-300 group-hover:text-crimson" />
            GitHub
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61591192395276"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-inter text-sm text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-peach"
          >
            <i className="fa-brands fa-facebook text-lg text-peach/80 transition-colors duration-300 group-hover:text-crimson" />
            Facebook
          </a>
        </div>

        {/* Divider */}
        <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-slate/70 to-transparent" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
          {/* Copyright */}
          <p className="font-inter text-xs text-white/40">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-peach">Yaser MORTAZA</span>. All
            Rights Reserved.
          </p>

          {/* Developer Credit */}
          <p className="font-inter text-xs text-white/40">
            Designed & Developed with{" "}
            <i className="fa-solid fa-heart mx-1 text-crimson" />
            by <span className="font-semibold text-peach">Yaser</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
