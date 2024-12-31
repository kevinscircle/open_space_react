import spaceman from "../assets/img/spacemanStar.png";
import "./Home.css";
import React from "react";


function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <h1 className="home-title">Welcome To Open Space</h1>
        <img src={spaceman} alt="" />
      </div>
      <div>
        <section className="mission bg-img">
          <div className="mission-image">
            <h2>Our Mission</h2>
            <p>
                Open Space is dedicated to promoting peace, unity, and
              understanding among all beings. We strive to create a world where
              everyone feels safe, heard, and valued. We believe in the power of
              positive change and believe that everyone has the opportunity to
              contribute to a better world.
            </p>
          </div>
        </section>
      </div>
      <div>
        <section className="vision">

        </section>
      </div>

    </React.Fragment>
  );
}

export default Home;
