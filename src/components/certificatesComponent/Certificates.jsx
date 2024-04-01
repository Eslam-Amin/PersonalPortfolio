import "./certificates.css"


let certificatesData = [
    {
        name: "MERN Stack Developer",
        issuer: "MaharaTech",
        link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=469694&code=UtNAI86iuW&qrcode=1",
        date: "January 2023",
        certificateImg: require("../../certificates/MERN.png"),
    },
    {
        name: "Front-End Developer",
        issuer: "MaharaTech",
        link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259520&code=GuMeZxXPal&qrcode=1",
        date: "January 2023",
        certificateImg: require("../../certificates/FrontEnd.png"),

    },
    {
        name: "ReactJS Course",
        issuer: "MaharaTech",
        link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=194868&code=cpFbfDYLhg&qrcode=1",
        date: "January 2023",
        certificateImg: require("../../certificates/react.png"),

    },
    {
        name: "SQL",
        issuer: "Solo Learn",
        link: "https://www.sololearn.com/certificates/CT-NYPBVSDF",
        date: "November 2022",
        certificateImg: require("../../certificates/sql.png"),
    },
    {
        name: "JavaScript Developer",
        issuer: "MaharaTech",
        link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259530&code=boUtPx75r6&qrcode=1",
        date: "November 2022",
        certificateImg: require("../../certificates/jsDeveloper.png"),

    },
    {
        name: "Professional Front-End Web Developer Nanodegree",
        issuer: "Udacity",
        link: "https://www.udacity.com/certificate/DLHANCVP",
        date: "September 2022 - November 2022",
        certificateImg: require("../../certificates/professionalWebDevelopment.png"),

    },
    {
        name: "Clean Code Course",
        issuer: "MaharaTech",
        link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=447929&code=qIgV3tGjQV&qrcode=1",
        date: "October 2022",
        certificateImg: require("../../certificates/cleanCode.png"),

    },
    {
        name: "Intro To MongoDB Course",
        issuer: "MaharaTech",
        link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=253409&code=st8qL4eV10&qrcode=1",
        date: "September 2022",
        certificateImg: require("../../certificates/introToMongoDB.png"),

    },
    {
        name: "Database Fundamentals",
        issuer: "MaharaTech",
        link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=162686&code=g8UWZn31it&qrcode=1",
        date: "September 2022",
        certificateImg: require("../../certificates/dbFundamentals.png"),

    },
]

function Certificates() {
    return (
        <div className="certificates" id="certifications">

            <h2>Certificates</h2>
            <ul className="certificateSlider">
                {
                    certificatesData.map(certificate =>
                        <CertificateSlider certificate={certificate} key={certificate.name} />
                    )
                }
            </ul>

        </div>
    )
}



function Certificate({ certificate, index }) {
    return (
        <>
            <li className="certificateName">{certificate.name}, <b>{certificate.issuer}</b>.</li>
            <ul className="certificateList">
                <li>
                    <a
                        href={certificate.link} target="blank"><b>Certificate</b></a>
                </li>
                <li>
                    <i>{certificate.date}</i>
                </li>
            </ul>
            {
                index + 1 < certificatesData.length &&
                <hr />
            }

        </>
    )
}


function CertificateSlider({ certificate }) {
    return (
        <>
            <li className="sliderItem">
                <img src={certificate.certificateImg} alt={certificate.name} className="sliderImg" />
                <span>Verify Here ➡️</span>
                <a href={certificate.link}>Certificate</a>
            </li>
        </>
    )
}

export default Certificates
