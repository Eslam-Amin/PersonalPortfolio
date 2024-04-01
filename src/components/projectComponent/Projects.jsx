import "./projects.css"
import { useState } from "react";
import AnimatedShapes from "../animatedShapes/AnimatedShapes";

let projects = [
    {
        name: "Social Network App",
        desc: "It's a MERN Stack Website with a UI of older Version of facebook, I Created this project from scratch.",
        otherInfo: "I used \"Render\" to host my Server, and \"Netlify\" to deploy my website.",
        functions: [
            "Auth Pages: Register, and Login.",
            "User Pages: Profile, and Feed/Timeline Page.",
            "Posts/Users: Create, Read, Update, and Delete Post/User.",
            "Interactions: Follow/Unfollow a user, and Like/Dislike a post."
        ],
        usedTech: " HTML, CSS, ReactJs, Axios, NodeJs, MongoDB, ExpressJs, and Context Api.",
        liveWebsite: "https://social-media-network.netlify.app/",
        futureWork: [
            "Create CRUD functions of User data. [ ✅ ]",
            "Create Authentication and Authorization Middleware Using JWT.",
            "Create a real-time messenger using webSocket.io."
        ]
    },
    {
        name: "Travel List",
        desc: "It's a React App to write down what you'll need in a vacation.",
        functions: [
            "Add new Item to your List.",
            "Check on the items you packed.",
            "Delete What you don't need.",
            "Sort Items in your List."
        ],
        usedTech: "HTML, CSS, ReactJS.",
        liveWebsite: "https://travellist-faraway.netlify.app/"
    },
    {
        name: "Personal Portfolio",
        desc: "My portfolio serves as a comprehensive representation of my skills and experiences, allowing potential employers to gain insight into my capabilities and assess my suitability for their needs. It enables me to stand out in a competitive job market, showcasing my unique talents and accomplishments in a visually appealing and engaging manner.",
        usedTech: "HTML, CSS, JavaScript, and ReactJs.",
        liveWebsite: "https://eslam-amin-portfolio.netlify.app/"
    },
    {
        name: "Book Store App",
        desc: "It's A book store application using MERN Stack to create a simple UI integrating with an API connected with mongoDb. you can do CRUD operations on the Store only if your The Admin, I used \"Render\" to host my Server, and \"Netlify\" to deploy my website.",
        otherInfo: <b>Admin: (EslamAminAdmin).</b>,
        usedTech: "HTML, TailwindCSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB",
        liveWebsite: "https://bookstore-mernstack-app.netlify.app/"
    },
    {
        name: "Simple Agency React App",
        desc: "In the Learning Process of having react as a skill I created this beautiful UI React app to increase my knowledge with the technology.",
        usedTech: " HTML, CSS, JavaScript, And ReactJS.",
        liveWebsite: "https://simple-agency-app.netlify.app/"
    },
    {
        name: "Back-End Service",
        desc: "In 7 Days I managed to create a backend service for a System who Provides online/offline Courses, Admin Panel to use CRUD operation using RESTful API for courses and students, assign students to specific course and the system will check if course’s prerequisites match student skills. if so, the system will add the student to a course group which has available places left, if not the system will add the specific student to rejected document in database with the required skill that he’s missing to enroll the course so in the future I can use these data to send course recommendation to rejected student. the system has an authorization and authentication to ensure if the user has a permission to use a specific feature.",
        usedTech: " Node.js, Express.js, MongoDB, JWT for Authentication and Authorization.",
        githubRepo: "https://github.com/Eslam-Amin/ODC_Back-End_Service"
    },
    {
        name: "To-Do List",
        desc: "A to-do list is a simple tool for organizing tasks. Each item includes a task description, priority level, deadline (if applicable), and any additional details. It helps you stay focused, manage time, and track progress. Keep it flexible and update regularly for optimal productivity.",
        usedTech: "HTML, CSS, and JavaScript.",
        liveWebsite: "https://eslam-amin.github.io/To-do-List/"
    },
]


function Projects() {
    const [currentOpen, setCurrentOpen] = useState(null);

    return (
        <>
            <AnimatedShapes />
            <div id="projectsSection">
                <h2>Projects</h2>

                {
                    projects.map((project, index) =>
                        <Project
                            project={project}
                            key={project.name}
                            currentOpen={currentOpen}
                            onOpen={setCurrentOpen}
                            num={index + 1} />
                    )
                }
                <AnimatedShapes />

            </div>
        </>
    )
}




function Project({ project, num, currentOpen, onOpen, children }) {
    const isOpen = num === currentOpen;

    function handleOpen() {
        onOpen(isOpen ? null : num);
    }
    return (
        <>
            <div className={`projectContent item ${isOpen && "open"}`} onClick={handleOpen}>
                <p className="number">{num < 10 ? "0" + num : num}</p>
                <h3 >{project.name}</h3>

                {isOpen &&
                    <>

                        <ul>
                            <li>
                                {project.desc}
                            </li>
                            {
                                project.otherInfo &&
                                <li>
                                    {project.otherInfo}
                                </li>
                            }
                            {
                                project.functions &&
                                <li>
                                    <b>Functions:</b>
                                    <ul>
                                        {project.functions.map(f =>
                                            <li key={f}>{f}</li>
                                        )}
                                    </ul>
                                </li>
                            }

                            <li>
                                <b>Used Technologies: </b>
                                {project.usedTech}
                            </li>
                            <li>
                                <a href={project.liveWebsite || project.githubRepo} target="blank">
                                    <b>{project.githubRepo ? "GitHub Repo" : "Live Website"}</b>
                                </a>
                            </li>
                            {
                                project.futureWork &&
                                <li>
                                    <b>Future Work</b>
                                    <ul>
                                        {
                                            project.futureWork.map((fWork, index) =>
                                                <li key={fWork + index}>
                                                    {fWork}
                                                </li>)
                                        }
                                    </ul>
                                </li>
                            }
                        </ul>
                    </>
                }

                <p className="icon" >
                    {
                        isOpen ? "-" : "+"
                    }
                </p>
            </div >
            {
                num < projects.length &&
                <hr />
            }
        </>

    )
}

export default Projects
