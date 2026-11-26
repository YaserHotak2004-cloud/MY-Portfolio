import React from "react";

import notFound from "../Assets/notfundpage.png";
import cocaCola from "../Assets/cocacola.png";
import afgFashion from "../Assets/fashion.png";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "404 Not Found Page",
      description:
        "A creative and modern 404 error page with an attractive design.",
      image: notFound,
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Live",
      liveLink: "https://not-found-page-404.vercel.app/",
    },
    {
      id: 2,
      title: "Coca-Cola Website",
      description:
        "A Coca-Cola themed website with a modern design and attractive visual elements.",
      image: cocaCola,
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Live",
      liveLink: "https://cocacola-rust.vercel.app/",
    },
    {
      id: 3,
      title: "AFG Fashion",
      description:
        "A modern fashion website showcasing clothing, shoes, and fashion products.",
      image: afgFashion,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      status: "Live",
      liveLink: "https://afgfashion.vercel.app/",
    },
    {
      id: 4,
      title: "Hotel Booking Website",
      description:
        "A modern hotel booking platform where users can explore hotels, view room details, and book their preferred accommodation.",
      image: null,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      status: "Coming Soon",
      liveLink: null,
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-midnight via-[#242E49] to-burgundy px-6 py-20 text-white md:px-10">
      <div className="mx-auto max-w-6xl pt-10">
        {/* Section Heading */}
        <p className="mb-4 font-inter text-sm font-semibold uppercase tracking-[4px] text-peach">
          My Portfolio
        </p>

        <h1 className="max-w-3xl font-inter text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Every Project Built to{" "}
          <span className="text-peach">Inspire Users</span>
        </h1>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate/50 bg-navy/80 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-peach/60 hover:shadow-xl hover:shadow-burgundy/30"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-52 w-full flex-col items-center justify-center bg-linear-to-br from-burgundy to-navy">
                    <i className="fa-solid fa-hotel text-5xl text-peach"></i>

                    <p className="mt-3 text-sm font-semibold text-peach">
                      Project Under Development
                    </p>
                  </div>
                )}

                {/* Project Status */}
                <span
                  className={`absolute right-3 top-3 rounded-full border px-3 py-1 text-xs font-semibold ${
                    project.status === "Live"
                      ? "border-peach/30 bg-midnight/90 text-peach"
                      : "border-crimson/40 bg-midnight/90 text-peach"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Project Information */}
              <div className="p-5">
                <h2 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-peach">
                  {project.title}
                </h2>

                <p className="mb-5 text-sm leading-6 text-white/60">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-crimson/30 bg-burgundy/30 px-3 py-1 text-xs text-peach"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Project / Coming Soon */}
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-burgundy to-crimson px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-crimson/30"
                  >
                    View Live Project
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg border border-peach/30 bg-burgundy/20 px-5 py-2.5 text-sm font-semibold text-peach">
                    Coming Soon
                    <i className="fa-solid fa-clock"></i>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
