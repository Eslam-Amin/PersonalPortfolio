import "./aboutMe.css"
import locationIcon from "../../images/Location.png"
import githubIcon from "../../images/github.svg"

let personalLinks = [
    {
        text: "LinkedIn",
        image: require("../../images/LinkedIn.png"),
        link: "https://www.linkedin.com/in/eslam-amin-610/",
    },
    {
        text: "GitHub",
        image: githubIcon,
        link: "https://github.com/Eslam-Amin",
    },
    {
        text: "HackerRank",
        image: require("../../images/HackerRank.png"),
        link: "https://www.hackerrank.com/profile/EslamAmin",
    }
]
function AboutMe() {

    return (
        <>

            <div id="aboutMeSection">

                <img src={require("../../images/programmer.png")} alt="programmer" id="personOnPC" />

                <div id="aboutMe">
                    <span className="headerSpan">
                        <strong>{"<Hello /> "}</strong>
                    </span>
                    <div id="aboutMeTitle">

                        <span className="headerSpan">my name is,</span>
                        <h2>Eslam Amin</h2>
                        <span><img src={locationIcon} alt="location" className="personalLinkIcons" />
                            Cairo, Egypt</span>
                    </div>
                    <p>
                        I am a software engineer; I am enthusiast about programming and development. I love coding with Python,
                        C++ to solve
                        problems, I focus on becoming Full Stack Development so most of the time I develop my knowledge with web
                        development, I
                        love using JavaScript in Node.JS as a back-end, and I want to learn more about Angular and react so I
                        can be mean or
                        mern Stack developer, I am self-organized, self-motivated, self-learner, and I work hard every day to be
                        a better
                        version of myself, so I don't compete with others I only compete with myself each day.
                    </p>
                </div>
            </div>
            <div className="aboutMeSectionLinks">
                <ul>
                    {
                        personalLinks.map(link =>
                            <PersonalLink link={link} key={link.text} />
                        )
                    }
                </ul>
            </div>

        </>
    )
}


function PersonalLink({ link }) {
    return (
        <li>
            <img src={(link.image)} alt="LinkedIn" className="personalLinkIcons" />
            <a href={link.link} target="blank" > {link.text}</a>
        </li>
    )
}

export default AboutMe
