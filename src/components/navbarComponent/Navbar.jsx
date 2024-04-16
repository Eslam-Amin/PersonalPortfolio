import "./navbar.css"





function Navbar() {
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
                    <a href="#certifications" >
                        <img
                            src={require("../../images/navbar/certificate.png")}
                            alt=""
                            className="navImg" />
                    </a>
                    <img
                        src={require("../../images/navbar/line.png")}
                        alt=""
                        className="navImgSplitter" />
                    <a href="https://drive.google.com/file/d/1nCF_er7S3ojnwjp1_OY4g4SB6ePzqP9g/view?usp=sharing" target="blank">
                        <img
                            src={require("../../images/navbar/cv.png")}
                            alt=""
                            className="navImg" />
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
                    <a href="#certifications" >
                        <img
                            src={require("../../images/navbar/certificate.png")}
                            alt=""
                            className="navImg" />
                    </a>
                    <img
                        src={require("../../images/navbar/line.png")}
                        alt=""
                        className="navImgSplitter" />
                    <a href="https://drive.google.com/file/d/1nCF_er7S3ojnwjp1_OY4g4SB6ePzqP9g/view?usp=sharing" target="blank">
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
