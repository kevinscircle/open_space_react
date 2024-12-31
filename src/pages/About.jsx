import "./About.css";
import ghostImage  from '../assets/img/ghost.jpg';
import rightArrow from '../assets/icons/rightArrowCircle.png';

import { useState, useEffect } from "react";

function About() {
  const [text, setText] = useState("");
  const toRotate = [
    "Web Developer",
    "Software Engineer",
    "Full Stack Developer",
  ];

  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const [isDeleting, setIsDeleting] = useState(false);
  const period = 200; // time per cycle word printed on screen

  useEffect(() => {
    const timer = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(timer);
    };
  }, [text]);

  const tick = () => {
    // modulo operator % to cycle through an array.
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="column1">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Kevin`} <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              architecto veniam cum quibusdam ex. Assumenda quam soluta
              accusantium a optio enim, laborum ipsa. Dignissimos incidunt id
              perspiciatis distinctio. Rerum repudiandae quo in. Illo fuga ab,
              laboriosam esse commodi ratione hic saepe, porro incidunt ex vero,
              cupiditate voluptas consequatur unde architecto.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect
              <div className="icon-container">
                <img className="right-arrow" src={rightArrow} alt="right arrow" ></img>
              </div>
            </button>
          </div>
          <div className="column2">
            <div>
               <img className="ghost-image" src={ghostImage} alt="ghost"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
