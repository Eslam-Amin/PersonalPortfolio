import { useState } from 'react'
import './recommendations.css'


let recommends = [
    {
        msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        writer: "Good Person",
    },
    {
        msg: "Nunc suscipit, risus sit amet molestie interdum, lorem est mollis nisl, in pellentesque tortor justo non ligula.",
        writer: "Anonymous",
    },
    {
        msg: "Lorem ipsum dolor sit amet, lorem est mollis nisl, in pellentesque tortor justo non ligula.",
        writer: "Gwen Stacy",
    },
    {
        msg: "Lorem ipsum dolor.",
        writer: "Ross",
    },
]
function Recommendations() {
    const [recs, setRecs] = useState(recommends);

    function handleAddRecommend(newRecommend) {
        setRecs(recs => [...recs, newRecommend]);
    }
    return (
        <div id="recommendationsSection">

            <h2>Recommendations</h2>

            <div id="recommendCard">
                {
                    recs.map((recommend, index) =>
                        <Recommendation recommend={recommend} key={recommend.writer + index} />)
                }

            </div>
            <LeaveRecommendationForm onLeaveRecommendation={handleAddRecommend} />

        </div>

    )
}

function Recommendation({ recommend }) {
    return (
        <div className="recommendCard">
            <p>
                {recommend.msg}
            </p>
            <h5>{recommend.writer}</h5>

        </div>
    )
}

function LeaveRecommendationForm({ onLeaveRecommendation }) {
    const [recMsg, setRecMsg] = useState("");
    const [recWriter, setRecWriter] = useState("");

    function handleLeaveRecommend() {
        if (recMsg.trim() === "") alert("you can't leavet the message Empty");
        else {
            let newRec = { writer: recWriter ? recWriter : "Anonymous", msg: recMsg };
            onLeaveRecommendation(newRec);
            setRecMsg("");
            setRecWriter("");
        }
    }
    return (
        <div id="leaveRecommendationSection">
            <h2>Leave a Recommendation</h2>
            <input type="text"
                placeholder="Name (optional)"
                id="txtName"
                className="recommendInput"
                value={recWriter}
                onChange={(e) => setRecWriter(e.target.value)} />
            <br />
            <textarea placeholder="Message"
                cols="11" rows="11"
                id="txtRecommendation"
                className="recommendInput"
                value={recMsg}
                onChange={(e) => setRecMsg(e.target.value)}></textarea>
            <button onClick={handleLeaveRecommend}>Submit</button>
        </div>
    )
}

export default Recommendations
