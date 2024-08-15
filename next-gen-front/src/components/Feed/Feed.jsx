import React from "react";
import "./Feed.css"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.jpeg"
import thumbnail3 from "../../assets/thumbnail3.jpeg"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.jpeg"
import thumbnail6 from "../../assets/thumbnail6.jpeg"
import thumbnail7 from "../../assets/thumbnail7.jpeg"
import thumbnail8 from "../../assets/thumbnail8.jpeg"
import {Link} from "react-router-dom";


const Feed = () => {
    return(
        <div className="feed">
            <Link to={"video/20/4521"} className="card">
                <img src={thumbnail1} alt=""/>
                <h2>Take real estate mentorship from the best mentor.</h2>
                <h3>Rich Dad</h3>
                <p>$300</p>
            </Link>
            <div className="card">
                <img src={thumbnail2} alt=""/>
                <h2>Take investment mentorship from the best mentor.</h2>
                <h3>Wolf of Wall Street</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail3} alt=""/>
                <h2>Take career mentorship from the best mentor.</h2>
                <h3>The Boss</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail4} alt=""/>
                <h2>Take career mentorship from the best mentor.</h2>
                <h3>Guider</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail5} alt=""/>
                <h2>Take networking mentorship from the best mentor.</h2>
                <h3>Network Master</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail6} alt=""/>
                <h2>Take networking mentorship from the best mentor.</h2>
                <h3>Network Academy</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail7} alt=""/>
                <h2>Take entrepreneurship mentorship from the best mentor.</h2>
                <h3>The Founder</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail8} alt=""/>
                <h2>Take entrepreneurship mentorship from the best mentor.</h2>
                <h3>The Entrepreneur</h3>
                <p>$300</p>
            </div>

            <div className="card">
                <img src={thumbnail1} alt=""/>
                <h2>Take real estate mentorship from the best mentor.</h2>
                <h3>Rich Dad</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail2} alt=""/>
                <h2>Take investment mentorship from the best mentor.</h2>
                <h3>Wolf of Wall Street</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail3} alt=""/>
                <h2>Take career mentorship from the best mentor.</h2>
                <h3>The Boss</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail4} alt=""/>
                <h2>Take career mentorship from the best mentor.</h2>
                <h3>Guider</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail5} alt=""/>
                <h2>Take networking mentorship from the best mentor.</h2>
                <h3>Network Master</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail6} alt=""/>
                <h2>Take networking mentorship from the best mentor.</h2>
                <h3>Network Academy</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail7} alt=""/>
                <h2>Take entrepreneurship mentorship from the best mentor.</h2>
                <h3>The Founder</h3>
                <p>$300</p>
            </div>
            <div className="card">
                <img src={thumbnail8} alt=""/>
                <h2>Take entrepreneurship mentorship from the best mentor.</h2>
                <h3>The Entrepreneur</h3>
                <p>$300</p>
            </div>
        </div>

    )
}
export default Feed