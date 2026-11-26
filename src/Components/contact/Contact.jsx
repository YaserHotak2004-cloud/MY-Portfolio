export default function Contact() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-midnight px-6 py-16 text-white md:px-10 lg:px-16">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-burgundy/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-crimson/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 flex items-center justify-center gap-3 font-inter text-sm font-semibold uppercase tracking-[4px] text-peach">
            <span className="h-0.5 w-8 bg-crimson" />
            Get In Touch
            <span className="h-0.5 w-8 bg-crimson" />
          </p>

          <h1 className="font-agrave text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Have a Project in Mind?
            <span className="mt-2 block text-peach">Let's Talk.</span>
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
              <span className="text-peach"> Today!</span>
            </h2>

            <p className="mb-10 max-w-md font-inter text-sm leading-8 text-white/60">
              I'm open to discussing new projects, creative ideas, and
              opportunities to contribute to your team.
            </p>

            <div className="flex flex-col gap-5">
              {/* Email */}
              <a
                href="mailto:yasermurtaza1383@gmail.com"
                className="group flex items-center gap-5 rounded-2xl border border-slate/60 bg-navy/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-crimson/70 hover:bg-burgundy/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-burgundy bg-burgundy/30 text-peach transition-all duration-300 group-hover:border-crimson group-hover:bg-crimson group-hover:text-white">
                  <i className="fa-solid fa-envelope text-xl" />
                </div>

                <div className="min-w-0">
                  <p className="font-inter text-xs text-white/50">Email Me</p>
                  <h3 className="mt-1 break-all font-inter text-sm font-semibold text-white">
                    yasermurtaza1383@gmail.com
                  </h3>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 rounded-2xl border border-slate/60 bg-navy/60 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-burgundy bg-burgundy/30 text-peach">
                  <i className="fa-solid fa-location-dot text-xl" />
                </div>

                <div>
                  <p className="font-inter text-xs text-white/50">Location</p>
                  <h3 className="mt-1 font-inter text-sm font-semibold text-white">
                    Kabul, Afghanistan
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
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate/60 bg-navy/60 text-peach transition-all duration-300 hover:-translate-y-1 hover:border-crimson hover:bg-crimson hover:text-white"
                  >
                    <i className="fa-brands fa-github text-xl" />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61591192395276"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate/60 bg-navy/60 text-peach transition-all duration-300 hover:-translate-y-1 hover:border-crimson hover:bg-crimson hover:text-white"
                  >
                    <i className="fa-brands fa-facebook-f text-xl" />
                  </a>

                  <a
                    href="https://wa.me/93730942171"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate/60 bg-navy/60 text-peach transition-all duration-300 hover:-translate-y-1 hover:border-crimson hover:bg-crimson hover:text-white"
                  >
                    <i className="fa-brands fa-whatsapp text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-3xl border border-slate/60 bg-navy/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <div className="mb-8">
              <h2 className="font-agrave text-2xl font-bold text-white">
                Send Me a Message
              </h2>

              <p className="mt-2 font-inter text-sm text-white/50">
                Fill out the form below and let's start a conversation.
              </p>
            </div>

            <form className="flex flex-col gap-5">
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
                  className="w-full rounded-xl border border-slate/70 bg-midnight/80 px-4 py-3.5 font-inter text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-peach focus:ring-2 focus:ring-peach/10"
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
                  className="w-full rounded-xl border border-slate/70 bg-midnight/80 px-4 py-3.5 font-inter text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-peach focus:ring-2 focus:ring-peach/10"
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
                  className="w-full rounded-xl border border-slate/70 bg-midnight/80 px-4 py-3.5 font-inter text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-peach focus:ring-2 focus:ring-peach/10"
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
                  rows={4}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-slate/70 bg-midnight/80 px-4 py-3.5 font-inter text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-peach focus:ring-2 focus:ring-peach/10"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-burgundy to-crimson px-6 py-4 font-inter text-sm font-bold text-white shadow-lg shadow-burgundy/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-crimson/20"
              >
                Send Message
                <i className="fa-solid fa-paper-plane transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
