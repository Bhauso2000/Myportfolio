import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "📊 Customized CRM",
    points: [
      "Developed the frontend of a customized CRM for the Business Services industry using React to manage and track projects from initiation to delivery.",
      "Built user interfaces to manage leads, contacts, proposals, and project workflows with React.",
      "Built functionalities to manage leads, contacts, proposals, and project workflows with .NET (backend) and React (frontend).",
      "Designed and maintained a dynamic, user-friendly UI for an enhanced user experience.",
    ],
    color: "#4CAF50",
  },
  {
    title: "🚚 Luggage Transportation Application",
    points: [
      "Developed a platform to connect luggage senders and travelers for transportation across cities, states, and countries using .NET and React.",
      "Created a workflow for seamless transaction between senders and travelers, allowing users to swap roles.",
      "Built a smooth system for luggage pickup, transportation, and delivery with React (frontend) and .NET (backend logic).",
    ],
    color: "#2196F3",
  },
  {
    title: "🛒 Online Marketplace for Selling Collectibles",
    points: [
      "Developed an E-Commerce application for selling collectibles, ensuring high performance and reliability with Node.js and React Native.",
      "Built task-based RESTful APIs with Node.js and implemented authentication and authorization mechanisms using JWT.",
      "Integrated Stripe for secure and seamless transactions.",
      "Implemented dynamic product activation and deactivation based on date and time, enhancing platform flexibility.",
      "Used MongoDB with Mongoose for efficient data management and storage in the backend.",
      "Designed a user-friendly mobile application with React Native for seamless product browsing and transactions.",
      "Technologies used: Node.js, Express.js, React Native, MongoDB, Stripe API, JWT Authentication, Axios.",
    ],
    color: "#FF5722",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                title={project.title}
                color={project.color}
                points={project.points}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({ i, title, points, color, progress, range, targetScale }) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[20%] h-auto w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] origin-top project-card"
        whileHover={{
          y: -10,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern project card */}
        <div className="w-full flex flex-col bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl overflow-hidden shadow-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-3 h-3 rounded-full shadow-md"
              style={{ backgroundColor: color }}
            />
            <div className="h-[1px] w-20 bg-gray-700" />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h2>

          {/* Bullet Points */}
          <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-gray-400 leading-relaxed">
            {points.map((point, idx) => (
              <li key={idx} className="pl-1">
                {point}
              </li>
            ))}
          </ul>

          {/* Subtle divider */}
          <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

// PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
};
        