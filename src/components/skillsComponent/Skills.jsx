import "./skills.css"
import htmlImage from "../../images/skills/HTML5.svg"
import cssImage from "../../images/skills/CSS.3.svg"
import bootstrapImage from "../../images/skills/Bootstrap.svg";
import nodeJsImage from "../../images/skills/Node.js.svg"
import reactImage from "../../images/skills/React.svg"



let skills = {
    basicStack: [
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
            image: require("../../images/skills/JavaScript.png")
        },
        {
            name: "Bootstrap",
            image: bootstrapImage
        },
    ], mainStack: [
        {
            name: "NodeJs",
            image: nodeJsImage
        },
        {
            name: "MongoDB",
            image: require("../../images/skills/mongoDB.png")
        },
        {
            name: "ExpressJS",
            image: require("../../images/skills/express.jpg")
        },
        {
            name: "ReactJS",
            image: reactImage
        }
    ],
    otherTech: [
        {
            name: "Docker",
            image: require("../../images/skills/docker.png")
        },
        {
            name: "AxiosHTTP",
            image: "https://axios-http.com/assets/logo.svg"
        },
        {
            name: "C#",
            image: require("../../images/skills/cSharp.png")
        },
        {
            name: "MS SQL Server",
            image: require("../../images/skills/database.png")
        },
    ],
}


function Skills() {

    return (

        <div id="skillsSection">
            <h2>Skills</h2>

            <div id="skillCard">
                <div className="skillCard leftCard">
                    <h4>Basic Stack</h4>

                    {
                        skills.basicStack.map(skill =>
                            <Skill skill={skill} key={skill.name} />
                        )
                    }
                </div>
                <div className="skillCard mernStack">
                    <h4>Main Stack</h4>
                    {
                        skills.mainStack.map(skill =>
                            <Skill skill={skill} key={skill.name} />
                        )
                    }
                </div>
                <div className="skillCard rightCard">
                    <h4>Other Technologies</h4>

                    {
                        skills.otherTech.map(skill =>
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
