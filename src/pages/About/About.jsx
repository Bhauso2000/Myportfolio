import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="text-4xl font-medium lg:text-5xl">About Me</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Left Image */}
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
              <img
                src={HeroImg}
                className="rounded-[15px] shadow block"
                alt="portfolio hero"
                width={1207}
                height={929}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Short Intro */}
            <p className="text-white leading-relaxed text-lg">
              Hi, I’m <span className="font-semibold">Bhauso Shinde</span>, a passionate{" "}
              <strong>MERN & React Native Developer</strong> with experience in building
              scalable web and mobile applications. I enjoy solving problems,
              learning new technologies, and turning ideas into reality 🚀.
            </p>

            {/* Technical Snapshot */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technical Snapshot</h3>
              <ul className="list-disc list-inside space-y-1 text-white">
                <li><strong>Front-End:</strong> React, Next.js, React Native, TypeScript, TailwindCSS</li>
                <li><strong>Back-End:</strong> Node.js, Express.js, MongoDB, Prisma, REST APIs</li>
                <li><strong>Tools:</strong> Git, Docker, AWS, Firebase, Socket.IO, Stripe</li>
              </ul>
            </div>

            {/* Career Note */}
            <p className="text-white leading-relaxed italic">
              Driven by curiosity and continuous learning ✨, I strive to
              deliver impactful solutions and grow as a developer every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
