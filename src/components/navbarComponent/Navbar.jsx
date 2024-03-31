import "./navbar.css"





function Navbar() {
    return (
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
                <a href="#aboutMeSection"> About me</a>
                <a href="#skillsSection"> Skills</a>
                <a href="#projectsSection"> Projects</a>
                <a href="#certifications">Certificates</a>
                <a href="#recommendationsSection">Recommendations</a>
            </div>
        </nav>
    )
}

export default Navbar
