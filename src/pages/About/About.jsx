import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            About Me
          </h2>

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
            <div className="relative space-y-6">
              {/* Career Objective */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Career Objective</h3>
                <p className="text-white leading-relaxed">
                  Results-driven Software Engineer with over 2 years of experience in web
                  development, known for adaptability, continuous learning, and strong
                  problem-solving abilities. Skilled in building high-performance applications
                  using the MERN stack (MongoDB, Express.js, React, Node.js) for web development,
                  and React Native for cross-platform mobile app development. Strong team player
                  with sharp analytical, communication, and problem-solving skills, focused on
                  delivering efficient and precise solutions.
                </p>
              </div>

              {/* Technical Competencies */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Technical Competencies</h3>
                <ul className="list-disc list-inside space-y-1 text-white">
                  <li>
                    <strong>Back-End Development:</strong> Node.js, Express.js, RESTful APIs,
                    MongoDB (Mongoose), Prisma ORM, TypeScript, Agile methodologies.
                  </li>
                  <li>
                    <strong>Front-End Development:</strong> HTML, CSS, JavaScript, TypeScript,
                    React.js, React Native, Next.js, React Query, Redux, Context API, custom hooks,
                    reusable components.
                  </li>
                  <li>
                    <strong>Tools & Integrations:</strong> VS Code, GitLab, Bitbucket, Postman,
                    Stripe API, JWT Authentication, Firebase Push Notifications, Socket.IO.
                  </li>
                </ul>
              </div>

              {/* Experience Summary */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Experience Summary</h3>
                <p className="text-white">
                  <strong>Company:</strong> SpidronTech LLP, Pune <br />
                  <strong>Designation:</strong> Assistant Software Developer (MERN Stack Developer) <br />
                  <strong>Duration:</strong> May 2023 – Present <br />
                  <strong>Total Experience:</strong> 2+ Years
                </p>
              </div>

              {/* Project Experience */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Project Experience</h3>
                <ul className="list-disc list-inside space-y-3 text-white">
                  <li>
                    <strong>Customized CRM:</strong> Developed frontend using React, integrated
                    with Dotnet backend to manage leads, contacts, proposals, and workflows.
                  </li>
                  <li>
                    <strong>Luggage Transportation Application:</strong> Built platform connecting
                    luggage senders and travelers with React (frontend) and Dotnet (backend).
                  </li>
                  <li>
                    <strong>Online Marketplace for Collectibles:</strong> E-Commerce app using
                    Node.js, React Native, MongoDB, Stripe API, JWT authentication, and real-time
                    product activation/deactivation.
                  </li>
                </ul>
              </div>

              {/* Academic Qualification */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Academic Qualification</h3>
                <ul className="list-disc list-inside text-white space-y-1">
                  <li>B.Tech – Dr. J. J. Magdum College of Engineering, Jaysingpur (CGPA 8.0) – 2022</li>
                  <li>HSC – Govindrao Junior College, Ichalkaranji (82.15%) – 2018</li>
                  <li>SSC – Maharashtra Board (85.80%) – 2016</li>
                </ul>
              </div>

              {/* Declaration */}
              <div>
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="italic text-white">
                    I hereby declare that the information mentioned above is true
                    to the best of my knowledge and belief.
                  </p>
                  <div className="mt-4">
                    <cite className="block font-medium text-white">
                      Place: Pune, Maharashtra
                    </cite>
                    <span className="text-white block mt-2 font-semibold">
                      Bhauso Anil Shinde
                    </span>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
