import "./skills.css"

import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { useState } from "react"
import { useEffect } from "react"
import Loader from "../loader/Loader"
const colRef = collection(db, "skills");

function Skills() {
    const [skills, setSkills] = useState()
    const [loading, setLoading] = useState(false)
    let personalSkills = [];

    useEffect(() => {
        const fetchSkills = async () => {
            setLoading(true)

            try {

                const snapshot = await getDocs(colRef)

                snapshot.docs.forEach((doc) => {
                    personalSkills.push({ ...doc.data(), id: doc.id })
                    setSkills(personalSkills[0])
                }
                )
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false)
            }
        }
        fetchSkills();
    }, [])
    return (

        <div id="skillsSection">
            <h2>Skills</h2>

            <div id="skillCard">
                <div className="skillCard leftCard">
                    <h4>Basic Stack</h4>
                    {
                        loading ?
                            <Loader />
                            :

                            skills?.basicStack.map(skill =>
                                <Skill skill={skill} key={skill.name} />
                            )
                    }
                </div>
                <div className="skillCard mernStack">
                    <h4>Main Stack</h4>
                    {
                        loading ?
                            <Loader />
                            :
                            skills?.mainStack.map(skill =>
                                <Skill skill={skill} key={skill.name} />
                            )
                    }
                </div>
                <div className="skillCard rightCard">
                    <h4>Other Technologies</h4>

                    {
                        loading ?
                            <Loader />
                            :
                            skills?.otherStack.map(skill =>
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
