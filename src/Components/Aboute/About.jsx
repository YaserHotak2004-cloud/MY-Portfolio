import Aboutpic from "../Assets/Aboutpic.webp";

// Technical Skills
const skills = [
  { name: "HTML5", icon: "fa-brands fa-html5" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt" },
  { name: "JAVASCRIPT", icon: "fa-brands fa-js" },
  { name: "TAILWIND CSS", icon: "fa-solid fa-wind" },
  { name: "BOOTSTRAP", icon: "fa-brands fa-bootstrap" },
  { name: "GIT", icon: "fa-brands fa-git-alt" },
  { name: "GITHUB", icon: "fa-brands fa-github" },
  { name: "REACT", icon: "fa-brands fa-react" },
  { name: "FIGMA", icon: "fa-brands fa-figma" },
];

export default function About() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-midnight text-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-burgundy/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-crimson/10 blur-[140px]" />

      {/* About Introduction */}
      <section className="relative">
        <div className="grid grid-cols-1 items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-24">
          {/* About Text */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 flex items-center gap-3 font-inter text-sm font-semibold uppercase tracking-[4px] text-peach">
              <span className="h-0.5 w-8 bg-crimson" />
              Who Am I
            </p>

            <h1 className="mb-6 font-agrave text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
              Hi! I'm <span className="text-peach">Mohammad-Yaser</span>
              <span className="mt-1 block text-crimson">MORTAZA</span>
            </h1>

            <p className="mb-5 font-inter text-sm leading-8 text-white/70 sm:text-base">
              I'm a passionate Front-End Developer and Computer Engineering
              student with an eye for modern design and innovation. I enjoy
              building responsive, visually engaging, and user-friendly web
              experiences that bring creative ideas to life.
            </p>

            <p className="font-inter text-sm leading-8 text-white/70 sm:text-base">
              I transform ideas into functional digital solutions using
              React.js, JavaScript, Tailwind CSS, and Bootstrap. With a focus on
              clean code, intuitive interfaces, and seamless functionality, I
              strive to create meaningful digital experiences that combine
              creativity, performance, and purpose.
            </p>

            {/* Main Skills Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["React.js", "JavaScript", "Tailwind CSS", "Bootstrap"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-burgundy/80 bg-navy/70 px-4 py-2 font-inter text-xs font-medium text-peach transition-all duration-300 hover:border-crimson hover:bg-crimson/15 hover:text-white"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* About Image */}
          <div className="relative mx-auto w-full max-w-100">
            {/* Image Glow */}
            <div className="absolute -inset-5 rounded-[35px] bg-burgundy/30 blur-[70px]" />
            <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-full bg-crimson/20 blur-[80px]" />

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[30px] border border-slate/80 bg-navy/80 p-2 shadow-2xl shadow-burgundy/20">
              <img
                src={Aboutpic}
                alt="Mohammad Yaser MORTAZA"
                className="h-100 w-full rounded-3xl object-cover object-top sm:h-125"
              />
            </div>

            {/* Decorative Corner */}
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-bl-[30px] border-b-2 border-l-2 border-peach/70" />
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="relative border-t border-slate/30 px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        {/* Section Heading */}
        <div className="mb-10">
          <p className="mb-4 flex items-center gap-3 font-inter text-sm font-semibold uppercase tracking-[4px] text-peach">
            <span className="h-0.5 w-8 bg-crimson" />
            What I Work With
          </p>

          <h2 className="font-agrave text-3xl font-bold text-white sm:text-4xl">
            My Technical <span className="text-peach">Skills</span>
          </h2>

          <p className="mt-4 max-w-2xl font-inter text-sm leading-7 text-white/60 sm:text-base">
            I work with modern web technologies and tools to build responsive,
            interactive, and user-friendly digital experiences.
          </p>
        </div>

        {/* Compact Skills Grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex h-20 flex-col items-center justify-center gap-1.5 overflow-hidden rounded-xl border border-slate/60 bg-navy/70 p-2 transition-all duration-300 hover:-translate-y-1 hover:border-crimson hover:bg-burgundy/30"
            >
              {/* Skill Icon */}
              <i
                className={`${skill.icon} text-xl text-peach transition-all duration-300 group-hover:scale-110 group-hover:text-white`}
              />

              {/* Skill Name */}
              <h3 className="font-inter text-[9px] font-bold tracking-wide text-white/80 transition-colors duration-300 group-hover:text-peach sm:text-[10px]">
                {skill.name}
              </h3>

              {/* Bottom Accent */}
              <span className="absolute bottom-0 h-0.5 w-0 bg-crimson transition-all duration-300 group-hover:w-1/2" />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
