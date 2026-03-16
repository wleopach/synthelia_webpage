import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-100 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Header/Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Synthellia Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Synthellia
            </span>
          </div>
          <div className="hidden space-x-8 md:flex">
            <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</a>
            <a href="#tech" className="text-sm font-medium hover:text-blue-600 transition-colors">Tech Stack</a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
          >
            Get Started
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 pt-24 pb-32 sm:px-6 lg:px-8">
          <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,var(--color-blue-500)_0%,transparent_70%)] opacity-[0.08] dark:opacity-[0.15]" />
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              Elevating Connectivity with <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Synthellia</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              Modern messaging solutions, powerful dashboards, and robust API integrations designed to scale your business.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="#services"
                className="w-full rounded-full bg-zinc-900 px-8 py-4 text-center font-bold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 sm:w-auto"
              >
                Our Services
              </a>
              <a
                href="#tech"
                className="w-full rounded-full border border-zinc-200 bg-white px-8 py-4 text-center font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-zinc-50 py-24 dark:bg-zinc-900/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">What we do</h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">Tailored software solutions for the modern enterprise.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "WhatsApp API Chats",
                  description: "Custom chat solutions built on Meta's WhatsApp Business API. Engage customers where they are.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )
                },
                {
                  title: "Modern Dashboards",
                  description: "High-performance data visualization and management dashboards using Angular and Next.js.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "API Connections",
                  description: "Seamless software integration with custom APIs developed with Python FastAPI and Django.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  )
                }
              ].map((service, idx) => (
                <div key={idx} className="group relative rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="mb-4 inline-block rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">Built with the best technologies</h2>
                <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
                  We use cutting-edge frameworks to ensure your application is fast, secure, and ready for the future.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-6">
                  {["Next.js 15+", "Angular", "Python", "FastAPI", "Django", "Meta WhatsApp API"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-tr from-blue-600/10 to-cyan-500/10 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  <div className="grid grid-cols-2 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                     <div className="text-center font-bold text-2xl">NEXT.JS</div>
                     <div className="text-center font-bold text-2xl">ANGULAR</div>
                     <div className="text-center font-bold text-2xl text-blue-500">PYTHON</div>
                     <div className="text-center font-bold text-2xl text-green-500">DJANGO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-blue-600 py-16 px-8 text-center text-white shadow-2xl shadow-blue-500/30">
            <h2 className="text-3xl font-bold sm:text-5xl">Ready to build something great?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
              Get in touch with us today and let&apos;s discuss how Synthellia can help you scale your operations.
            </p>
            <div className="mt-10">
              <a
                href="mailto:hello@synthellia.com"
                className="inline-block rounded-full bg-white px-8 py-4 font-bold text-blue-600 transition-transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-12 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
             <Image
              src="/logo.png"
              alt="Synthellia Logo"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="font-bold">Synthellia</span>
          </div>
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Synthellia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
