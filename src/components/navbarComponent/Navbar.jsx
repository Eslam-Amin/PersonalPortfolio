import "./navbar.css"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
import { useState, useEffect } from "react"

const colRef = doc(db, "cv", "cv");

function Navbar() {
    const [cvLink, setCvLink] = useState();
    useEffect(() => {

        getDoc(colRef)
            .then((doc) => {
                setCvLink(doc.data().link)
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <>
            <nav className="navbar">
                <div id="personalInfo">
                    <h3>Eslam Amin</h3>
                    <div className="info">
                        <img src={require("../../images/mail.png")} alt="Mail" />
                        <p> ea.eslamamin@gmail.com</p>
                    </div>
                    <div className="info">
                        <img src={require("../../images/phone.png")} alt="Mail" />
                        <p> (+20) 1099007326</p>
                    </div>
                </div>
                <div id="pageTabs">
                    <a href="#aboutMeSection">About me</a>
                    <a href="#skillsSection">Skills</a>
                    <a href="#projectsSection">Projects</a>
                    <a href="#certificates">Certificates</a>
                    <img
                        src={require("../../images/navbar/grey-line.png")}
                        alt=""
                        className="" />
                    <a href={cvLink} target="blank">
                        CV
                    </a>
                </div>
            </nav>

            <nav className="navbarMobile">
                <div className="imgWrapper">
                    <a href="#aboutMeSection" >

                        <img
                            src={require("../../images/navbar/home.png")}
                            alt=""
                            className="navImg" />
                    </a>
                    <a href="#skillsSection" >
                        <img
                            src={require("../../images/navbar/skills.png")}
                            alt=""
                            className="navImg" />
                    </a>
                    <a href="#projectsSection" >
                        <img
                            src={require("../../images/navbar/code.png")}
                            alt=""
                            className="navImg" />
                    </a>
                    <a href="#certificates" >
                        <img
                            src={require("../../images/navbar/certificate.png")}
                            alt=""
                            className="navImg" />
                    </a>

                    <img
                        src={require("../../images/navbar/line.png")}
                        alt=""
                        className="navImgSplitter" />
                    <a href={cvLink} target="blank">
                        <img
                            src={require("../../images/navbar/cv.png")}
                            alt=""
                            className="navImg" />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
