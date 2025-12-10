import doctors from "../assets/doctors.png";
import school from "../assets/school.png";
// import chatapp from "../assets/chatApp.png";
// import ecommerce from "../assets/ecommerce.png";
// import myportfolio from "../assets/myportfolio.png";
import app from "../assets/app.png";
import homehero from "../assets/homehero.png";
import pet from "../assets/pet.png";
import zapshift from "../assets/zapshift.png";

import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
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
      "Doctor Appointment App using MERN Stack. Where Admin dashboard for management and front view for patients.Where patient can get appointment ,send message ,find list of doctors etc. All patients activity or  doctors activity can be managed in the admin panel.",
    links: {
      site: "https://doctor-appiontment.netlify.app/",
      github:
        "https://github.com/Shagor-Mia/Doctor-s-appointment-in-a-hospital-web-application",
    },
  },
  // {
  //   img: chatapp,
  //   title: "MERN chatApp",
  //   description:
  //     "A fullstack  chat application built with React js,Tailwind CSS,Node.js and Express js, Socket.io and MongoDB atlas. Where multiple peaple can communicate each other in real time. Anyone can see who is online or offline",
  //   links: {
  //     site: "",
  //     github: "https://github.com/Shagor-Mia/ChatApp",
  //   },
  // },
  // {
  //   img: ecommerce,
  //   title: "MERN E-commerce",
  //   description:
  //     "A responsive e-commerce platform with various features. Where frontend is build with React js, Redux-toolkit, ailwind CSS, shadcn UI and backend is build with Node js, Express js, MongoDB Atlas and SSLCommerz Payment gateway. Where frontview for customer and dashboard for admin.",
  //   links: {
  //     site: "",
  //     github: "https://github.com/Shagor-Mia/E-Commerce",
  //   },
  // },
  // {
  //   img: myportfolio,
  //   title: "Dynamic Portfolio",
  //   description:
  //     "A dynamic portfolio using React js, Redux-toolkit,Tailwind CSS,shadcn UI, Node js, Express js, MongoDB. It Has portfolio part for everyone and dashboard for me, where i can manage my portfolio dynamically.",
  //   links: {
  //     site: "",
  //     github: "https://github.com/Shagor-Mia/Portfolio",
  //   },
  // },
  // {
  //   img: project6,
  //   title: "Project #5",
  //   description:
  //     "A data visualization project using D3.js and other libraries.",
  //   links: {
  //     site: "#",
  //     github: "#",
  //   },
  // },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-4xl font-bold text-gray-200 mb-8">Projects</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {project.links.site ? (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    View Site
                  </a>
                ) : (
                  <span className="px-4 py-2 bg-gray-500 text-gray-300 rounded-lg cursor-not-allowed">
                    Not Deployed
                  </span>
                )}

                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
