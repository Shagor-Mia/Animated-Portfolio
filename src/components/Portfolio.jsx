import doctors from "../assets/doctors.png";
import chatapp from "../assets/chatApp.png";
import ecommerce from "../assets/ecommerce.png";
import myportfolio from "../assets/myportfolio.png";
import project6 from "../assets/project6.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
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
  {
    img: chatapp,
    title: "MERN chatApp",
    description:
      "A fullstack  chat application built with React js,Tailwind CSS,Node.js and Express js, Socket.io and MongoDB atlas. Where multiple peaple can communicate each other in real time. Anyone can see who is online or offline",
    links: {
      site: "",
      github: "https://github.com/Shagor-Mia/ChatApp",
    },
  },
  {
    img: ecommerce,
    title: "MERN E-commerce",
    description:
      "A responsive e-commerce platform with various features. Where frontend is build with React js, Redux-toolkit, ailwind CSS, shadcn UI and backend is build with Node js, Express js, MongoDB Atlas and SSLCommerz Payment gateway. Where frontview for customer and dashboard for admin.",
    links: {
      site: "",
      github: "https://github.com/Shagor-Mia/E-Commerce",
    },
  },
  {
    img: myportfolio,
    title: "Dynamic Portfolio",
    description:
      "A dynamic portfolio using React js, Redux-toolkit,Tailwind CSS,shadcn UI, Node js, Express js, MongoDB. It Has portfolio part for everyone and dashboard for me, where i can manage my portfolio dynamically.",
    links: {
      site: "",
      github: "https://github.com/Shagor-Mia/Portfolio",
    },
  },
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
