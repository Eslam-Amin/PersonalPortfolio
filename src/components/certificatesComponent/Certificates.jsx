import "./certificates.css"


let certificatesData = [
    {
        name: "MERN Stack Developer",
        issuer: "MaharaTech",
        link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=469694&code=UtNAI86iuW&qrcode=1",
        date: "January 2023"
    },
    {
        name: "Front-End Developer",
        issuer: "MaharaTech",
        link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259520&code=GuMeZxXPal&qrcode=1",
        date: "January 2023"
    },
    {
        name: "ReactJS Course",
        issuer: "MaharaTech",
        link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=194868&code=cpFbfDYLhg&qrcode=1",
        date: "January 2023"
    },
    {
        name: "JavaScript Developer",
        issuer: "MaharaTech",
        link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259530&code=boUtPx75r6&qrcode=1",
        date: "November 2022"
    },
    {
        name: "Professional Front-End Web Developer Nanodegree",
        issuer: "Udacity",
        link: "https://www.udacity.com/certificate/DLHANCVP",
        date: "September 2022 - November 2022"
    },
]

function Certificates() {
    return (
        <div className="certificates" id="certifications">

            <h2>Certificates</h2>
            <ul className="certificateContent">
                {
                    certificatesData.map((certificate, index) =>
                        <Certificate certificate={certificate} key={certificate.name} index={index} />)
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

export default Certificates
