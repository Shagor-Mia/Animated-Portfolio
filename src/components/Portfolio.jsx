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
    title: "TicketTime - Online Ticket Booking Platform (MERN stack)",
    description:
      "An online ticket booking project With MERN stack. here you can book your online(bus,train,plane etc) ticket to your desire destination. admin , vendor ,user are separate usecase. for payment integration we use Stripe payment. here uses react, swiper.js, framer motion,firebase authentication, react Map(react leaflet), firebase, JWT, node js, express js, mongodb atlas, stripe payment gateway. hosting in firebase(frontend) and vercel(backend). ##credentials for admin:safwanjarir07@gmail.com,vendor:sagor4@gmail.com, user:safwanjarir07@gmail.com, Password for all:Aa@123",
    links: {
      site: "https://ticket-time-dcb40.web.app/",
      github: "https://github.com/Shagor-Mia/TicketTime-client",
    },
  },
  {
    img: zapshift,
    title: "ZapShift-A pickup courier Service- (MERN fullstack)",
    description:
      "A courier service project With MERN stack. here you can pass your delivery from your to your destination. admin , rider ,user are separate usecase. for payment integration we use Stripe payment. here uses react, swiper.js, react Map(react leaflet), firebase, node js, express js, mongodb atlas, stripe payment gateway. hosting in firebase and vercel(backend). ##credentials for admin:sami1@gmail.com,rider:samim@gmail.com, user:alamin@gmail.com, Password forall:Aa@123",
    links: {
      site: "https://final-project-zipshift-curier.web.app/",
      github: "https://github.com/Shagor-Mia/11ZapShift-Courier-service",
    },
  },
  {
    img: homehero,
    title: "Home Hero-A local service finder - (MERN fullstack)",
    description:
      "react,firebase athentication ,JWT, daisyUI etc. the project is about daily home service. such as electrical , plumber, decoration, home-renovation etc",
    links: {
      site: "https://hero-home-service10.web.app/",
      github: "https://github.com/Shagor-Mia/client-side-home-service10",
    },
  },
  {
    img: pet,
    title: "WarmPaws – Pet Care in Winter- (Frontend Projects)",
    description:
      "pet care centre in winter. react,js firebase authentication,framer motion etc used for this project 'WarmPaws – Pet Care in Winter'. here this project done by react js, firebase, JSON contextAPI ",
    links: {
      site: "https://sagor-paw-cares.netlify.app/",
      github: "https://github.com/Shagor-Mia/PetCare-WarmPaws",
    },
  },
  {
    img: app,
    title: "Quick Store-An App Gallery - (Frontend Projects)",
    description:
      "it is prototype of app store like play store. React, react router, daisyUI, recharts, loading spinner, search, sort by etc.",
    links: {
      site: "https://quicktoapp.netlify.app/",
      github: "https://github.com/Shagor-Mia/Assignment8",
    },
  },
  {
    img: school,
    title: "Next Js School Management Dashboard- (Frontend Projects)",
    description:
      "How to manage a school smartly are designed in this project. Where Admin,Teacher, Student has different role for entering. Where has menu item such as teacher, students, parents ,events, exam etc you will be found.Next js,Typescript, React js, react-form-hook, zod validation etc are being used in this UI design ",
    links: {
      site: "https://school-management-dasboard-ui.netlify.app/",
      github: "https://github.com/Shagor-Mia/school_management_dashboard_UI",
    },
  },
  {
    img: doctors,
    title: "Doctors AppionmentApp",
    description:
      "Doctor Appointment App using MERN Stack. Where Admin dashboard for management and front view for patients.Where patient can get appointment ,send message ,find list of doctors etc. All patients activity or doctors activity can be managed in the admin panel.",
    links: {
      site: "https://doctor-appiontment.netlify.app/",
      github:
        "https://github.com/Shagor-Mia/Doctor-s-appointment-in-a-hospital-web-application",
    },
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-14 text-center lg:text-left">
          Projects
        </h2>

        {/* PROJECT LIST */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <Reveal key={index}>
              <div
                className={`flex flex-col gap-10 lg:gap-14 lg:flex-row items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="w-full lg:w-1/2">
                  <div className="overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[360px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* ACTION BUTTONS */}
                  <div className="flex flex-wrap items-center gap-4">
                    {project.links.site ? (
                      <a
                        href={project.links.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
                      >
                        View Site
                      </a>
                    ) : (
                      <span className="px-6 py-3 rounded-xl bg-gray-600 text-gray-300 cursor-not-allowed">
                        Not Deployed
                      </span>
                    )}

                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-700 text-gray-200 hover:bg-gray-800 transition"
                    >
                      <AiOutlineGithub size={24} />
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
