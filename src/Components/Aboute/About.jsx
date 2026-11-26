import Aboutpic from "../Assets/Aboutpic.webp";

// skills

const skills = [
  {
    name: "HTML5",
    icon: "fa-brands fa-html5",
  },
  {
    name: "CSS3",
    icon: "fa-brands fa-css3-alt",
  },
  {
    name: "JAVASCRIPT",
    icon: "fa-brands fa-js",
  },
  {
    name: "TAILWIND CSS",
    icon: "fa-solid fa-wind",
  },
  {
    name: "BOOTSTRAP",
    icon: "fa-brands fa-bootstrap",
  },
  {
    name: "GIT",
    icon: "fa-brands fa-git-alt",
  },
  {
    name: "GITHUB",
    icon: "fa-brands fa-github",
  },
  {
    name: "REACT",
    icon: "fa-brands fa-react",
  },
  {
    name: "FIGMA",
    icon: "fa-brands fa-figma",
  },
];

export default function About() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-sapphire via-[#073d91] to-ocean">
      <div>
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-6 py-16 md:px-10 lg:px-16">
            {/* About Text */}
            <div className="flex flex-col justify-center">
              <p className="mb-4 flex items-center gap-3 font-inter text-sm font-semibold uppercase tracking-[4px] text-jade">
                <span className="h-0.5 w-8 bg-jade"></span>
                Who Am I
              </p>

              <h1 className="mb-6 font-agrave text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
                Hi! I'm <span className="text-ocean">Mohammad-Yaser</span>
                <span className="block text-jade">MORTAZA</span>
              </h1>

              <p className="mb-5 font-inter text-sm leading-8 text-white/65 sm:text-base">
                I'm a passionate Front-End Developer and Computer Engineering
                student with an eye for modern design and innovation. I enjoy
                building responsive, visually engaging, and user-friendly web
                experiences that bring creative ideas to life.
              </p>

              <p className="font-inter text-sm leading-8 text-white/65 sm:text-base">
                I transform ideas into functional digital solutions using
                React.js, JavaScript, Tailwind CSS, and Bootstrap. With a focus
                on clean code, intuitive interfaces, and seamless functionality,
                I strive to create meaningful digital experiences that combine
                creativity, performance, and purpose.
              </p>

              {/* Skills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["React.js", "JavaScript", "Tailwind CSS", "Bootstrap"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-ocean/30 bg-ocean/5 px-4 py-2 font-inter text-xs text-ocean transition-all duration-300 hover:border-jade hover:bg-jade/10 hover:text-jade"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* About Image */}
            <div className="relative mx-auto w-full max-w-100">
              {/* Glow Effects */}
              <div className="absolute -inset-5 rounded-[35px] bg-ocean/20 blur-[70px]"></div>
              <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-full bg-jade/20 blur-[80px]"></div>

              {/* Image Border */}
              <div className="relative overflow-hidden rounded-[30px] border border-ocean/30 bg-sapphire/20 p-2 shadow-2xl shadow-sapphire/30">
                <img
                  src={Aboutpic}
                  alt="Mohammad Yaser MORTAZA"
                  className="h-100 w-full rounded-3xl object-cover object-top sm:h-125"
                />
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-bl-[30px] border-b-2 border-l-2 border-jade/70"></div>
            </div>
          </div>
        </section>
        {/* skils */}

        <section className="px-6 py-20 md:px-10 lg:px-16">
          {/* Section Heading */}
          <div className="mb-12">
            <p className="mb-4 flex items-center gap-3 font-inter text-sm font-semibold uppercase tracking-[4px] text-jade">
              <span className="h-0.5 w-8 bg-jade"></span>
              What I Work With
            </p>

            <h2 className="font-agrave text-3xl font-bold text-white sm:text-4xl">
              My Technical <span className="text-ocean">Skills</span>
            </h2>

            <p className="mt-4 max-w-2xl font-inter text-sm leading-7 text-white/60 sm:text-base">
              I work with modern web technologies and tools to build responsive,
              interactive, and user-friendly digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative flex min-h-20 flex-col items-center justify-center gap-5 overflow-hidden rounded-3xl border border-ocean/20 bg-linear-to-br from-sapphire/20 to-[#080D18] p-4 shadow-lg shadow-sapphire/10 transition-all duration-500 hover:-translate-y-2 hover:border-jade/50 hover:shadow-xl hover:shadow-ocean/10"
              >
                {/* Background Glow */}
                <div className="absolute -right-10 -top-10 h-22 w-22 rounded-full bg-ocean/10 blur-3xl transition-all duration-500 group-hover:bg-jade/20"></div>

                {/* Skill Icon */}
                <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-ocean/20 bg-ocean/5 transition-all duration-500 group-hover:border-jade/40 group-hover:bg-jade/10">
                  <i
                    className={`${skill.icon} text-3xl text-ocean transition-all duration-500 group-hover:scale-110 group-hover:text-jade`}
                  ></i>
                </div>

                {/* Skill Name */}
                <h3 className="relative font-inter text-xs font-bold tracking-[1.5px] text-white/80 transition-colors duration-300 group-hover:text-jade sm:text-sm">
                  {skill.name}
                </h3>

                {/* Bottom Accent */}
                <span className="absolute bottom-0 h-0.5 w-0 bg-linear-to-r from-ocean to-jade transition-all duration-500 group-hover:w-1/2"></span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
