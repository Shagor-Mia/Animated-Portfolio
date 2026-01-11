import doctors from "../assets/doctors.png";
import school from "../assets/school.png";
import app from "../assets/app.png";
import homehero from "../assets/homehero.png";
import pet from "../assets/pet.png";
import zapshift from "../assets/zapshift.png";
import ticket from "../assets/ticket.png";

import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: ticket,
    title: "TicketTime – Online Ticket Booking Platform (MERN)",
    description:
      "Online ticket booking system (bus, train, plane). Role-based access (admin, vendor, user), Stripe payments, maps, authentication, JWT, MongoDB, Firebase & Vercel.",
    links: {
      site: "https://ticket-time-dcb40.web.app/",
      github: "https://github.com/Shagor-Mia/TicketTime-client",
    },
  },
  {
    img: zapshift,
    title: "ZapShift – Pickup Courier Service (MERN)",
    description:
      "Courier service platform with admin, rider & user roles. Stripe payments, maps, Firebase auth, Node.js backend & MongoDB.",
    links: {
      site: "https://final-project-zipshift-curier.web.app/",
      github: "https://github.com/Shagor-Mia/11ZapShift-Courier-service",
    },
  },
  {
    img: homehero,
    title: "Home Hero – Local Service Finder",
    description:
      "Daily home services platform (electrician, plumber, renovation). Built with React, Firebase, JWT & DaisyUI.",
    links: {
      site: "https://hero-home-service10.web.app/",
      github: "https://github.com/Shagor-Mia/client-side-home-service10",
    },
  },
  {
    img: pet,
    title: "WarmPaws – Pet Care in Winter",
    description:
      "Pet care website built with React, Firebase authentication, Context API & Framer Motion.",
    links: {
      site: "https://sagor-paw-cares.netlify.app/",
      github: "https://github.com/Shagor-Mia/PetCare-WarmPaws",
    },
  },
  {
    img: app,
    title: "Quick Store – App Gallery",
    description:
      "Prototype of an app store with search, sort, charts & routing using React & DaisyUI.",
    links: {
      site: "https://quicktoapp.netlify.app/",
      github: "https://github.com/Shagor-Mia/Assignment8",
    },
  },
  {
    img: school,
    title: "Next.js School Management Dashboard",
    description:
      "Role-based dashboard for admin, teachers & students. Built with Next.js, TypeScript, React Hook Form & Zod.",
    links: {
      site: "https://school-management-dasboard-ui.netlify.app/",
      github: "https://github.com/Shagor-Mia/school_management_dashboard_UI",
    },
  },
  {
    img: doctors,
    title: "Doctor Appointment Application (MERN)",
    description:
      "Doctor appointment system with admin panel, patient booking & doctor management.",
    links: {
      site: "https://doctor-appiontment.netlify.app/",
      github:
        "https://github.com/Shagor-Mia/Doctor-s-appointment-in-a-hospital-web-application",
    },
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-12">
          Projects
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <Reveal key={index}>
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full rounded-xl shadow-lg object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-base sm:text-lg mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {project.links.site ? (
                      <a
                        href={project.links.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                      >
                        View Site
                      </a>
                    ) : (
                      <span className="px-5 py-2 rounded-lg bg-gray-600 text-gray-300 cursor-not-allowed">
                        Not Deployed
                      </span>
                    )}

                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-5 py-2 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-800 transition"
                    >
                      <AiOutlineGithub size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
