import "./skills.css"
import htmlImage from "../../images/HTML5_logo_and_wordmark.svg"
import cssImage from "../../images/CSS.3.svg"
import bootstrapImage from "../../images/Bootstrap.svg";
import nodeJsImage from "../../images/Node.js.svg"
import reactImage from "../../images/React.svg"



let skills = {
    webDevelopment: [
        {
            name: "HTML",
            image: htmlImage
        },
        {
            name: "CSS",
            image: cssImage
        },
        {
            name: "JavaScript",
            image: require("../../images/JavaScript.png")
        },
        {
            name: "Bootstrap",
            image: bootstrapImage
        },
    ], mernStack: [
        {
            name: "NodeJs",
            image: nodeJsImage
        },
        {
            name: "MongoDB",
            image: require("../../images/mongoDB.png")
        },
        {
            name: "ExpressJS",
            image: require("../../images/express.jpg")
        },
        {
            name: "ReactJS",
            image: reactImage
        },
        {
            name: "AxiosHTTP",
            image: "https://axios-http.com/assets/logo.svg"
        }
    ],
    other: [
        {
            name: "C#",
            image: require("../../images/cSharp.png")
        },
        {
            name: "MS SQL Server",
            image: require("../../images/database.png")
        },
    ],
}


function Skills() {

    return (

        <div id="skillsSection">
            <h2>Skills</h2>

            <div id="skillCard">
                <div className="skillCard">
                    {
                        skills.webDevelopment.map(skill =>
                            <Skill skill={skill} key={skill.name} />
                        )
                    }
                </div>
                <div className="skillCard">
                    {
                        skills.mernStack.map(skill =>
                            <Skill skill={skill} key={skill.name} />
                        )
                    }
                </div>
                <div className="skillCard">
                    {
                        skills.other.map(skill =>
                            <Skill skill={skill} key={skill.name} />
                        )
                    }
                </div>
            </div>

        </div>



    )
}


function Skill({ skill }) {
    return (
        <div className="skillCardItem">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
        </div>
    )
}


export default Skills
