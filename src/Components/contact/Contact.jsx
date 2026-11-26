export default function Contact() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-sapphire via-[#073d91] to-[#080D18] px-6 py-16 md:px-10 lg:px-16">
      {/* Background Effects */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-ocean/20 blur-[120px]"></div>
      <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-jade/10 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 flex items-center justify-center gap-3 font-inter text-sm font-semibold uppercase tracking-[4px] text-jade">
            <span className="h-0.5 w-8 bg-jade"></span>
            Get In Touch
            <span className="h-0.5 w-8 bg-jade"></span>
          </p>

          <h1 className="font-agrave text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Have a Project in Mind?
            <span className="block mt-2 text-ocean">Let's Talk.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl font-inter text-sm leading-7 text-white/60 sm:text-base">
            Have an idea or a project in mind? I'd love to hear about it. Let's
            work together and create something meaningful.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-5 font-agrave text-2xl font-bold text-white sm:text-3xl">
              Let's Collaborate
              <span className="text-jade"> Today!</span>
            </h2>

            <p className="mb-10 max-w-md font-inter text-sm leading-8 text-white/60">
              I'm open to discussing new projects, creative ideas, and
              opportunities to contribute to your team.
            </p>

            <div className="flex flex-col gap-6">
              {/* Email */}
              <a
                href="mailto:yasermurtaza1383@gmail.com"
                className="group flex items-center gap-5 rounded-2xl border border-ocean/20 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-jade/50 hover:bg-ocean/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ocean/10 text-ocean transition-colors group-hover:bg-jade/10 group-hover:text-jade">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>

                <div>
                  <p className="font-inter text-xs text-white/50">Email Me</p>
                  <h3 className="mt-1 font-inter text-sm font-semibold text-white">
                    yasermurtaza1383@gmail.com
                  </h3>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 rounded-2xl border border-ocean/20 bg-white/5 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>

                <div>
                  <p className="font-inter text-xs text-white/50">Location</p>
                  <h3 className="mt-1 font-inter text-sm font-semibold text-white">
                    Kabul Afghanistan
                  </h3>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-4">
                <p className="mb-5 font-inter text-sm font-semibold text-white">
                  Follow Me
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/YaserHotak2004-cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-ocean/20 bg-white/5 text-ocean transition-all duration-300 hover:-translate-y-1 hover:border-jade hover:text-jade"
                  >
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61591192395276"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-ocean/20 bg-white/5 text-ocean transition-all duration-300 hover:-translate-y-1 hover:border-jade hover:text-jade"
                  >
                    <i className="fa-brands fa-facebook-f text-xl"></i>
                  </a>

                  <a
                    href="https://wa.me/93730942171"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-ocean/20 bg-white/5 text-ocean transition-all duration-300 hover:-translate-y-1 hover:border-jade hover:text-jade"
                  >
                    <i className="fa-brands fa-whatsapp text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-3xl border border-ocean/20 bg-[#080D18]/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <div className="mb-8">
              <h2 className="font-agrave text-2xl font-bold text-white">
                Send Me a Message
              </h2>
              <p className="mt-2 font-inter text-sm text-white/50">
                Fill out the form below and let's start a conversation.
              </p>
            </div>

            <form className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-inter text-sm font-medium text-white/80"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-ocean/20 bg-white/5 px-4 py-4 font-inter text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-jade focus:ring-2 focus:ring-jade/10"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-inter text-sm font-medium text-white/80"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="hello@example.com"
                  required
                  className="w-full rounded-xl border border-ocean/20 bg-white/5 px-4 py-4 font-inter text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-jade focus:ring-2 focus:ring-jade/10"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="font-inter text-sm font-medium text-white/80"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  required
                  className="w-full rounded-xl border border-ocean/20 bg-white/5 px-4 py-4 font-inter text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-jade focus:ring-2 focus:ring-jade/10"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-inter text-sm font-medium text-white/80"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-ocean/20 bg-white/5 px-4 py-4 font-inter text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-jade focus:ring-2 focus:ring-jade/10"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-ocean to-jade px-6 py-4 font-inter text-sm font-bold text-[#080D18] shadow-lg shadow-ocean/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-jade/20"
              >
                Send Message
                <i className="fa-solid fa-paper-plane transition-transform duration-300 group-hover:translate-x-1"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
