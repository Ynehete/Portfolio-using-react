import React from "react";
import './about.css'
import photo from './photo.png';
import photo1 from './img3.jpg';
function About() {
    return (
        <>
            <div className="about" id="about">
                <div>
                    <h1 className="name1">Yash Nehete</h1>
                    <h1 className="des">WEB DEVELOPER</h1>
                    <button className="work">View My Work</button>
                </div>
                <img src={photo} alt="Circular Image" className="image-container" />
                <div>

                </div>
            </div>
            <div className="about1">
                <div>
                    <img src={photo1} alt="dev-image" className="abt-img"></img>
                </div>
                <div>
                    <h1 className="about-me">About Me</h1>
                    <h5 className="about-desc">Post Graduate from CDAC (Bangalore). 
                    Result-oriented Full Stack Developer.
                     Proficient in Java, SQL, HTML, CSS, 
                     JavaScript, React.js, Express.js, 
                     Spring Boot, and Linux.
                      Keen to deliver projects using Agile (Scrum) methodology.</h5>

                      <button className="work">View My Work</button>

                </div>
            </div>
        </>
    );
}
export default About;