import React, { useEffect, useRef } from "react";
import "./Home.css";
import Header from "../Header/Header";
import flower from "../Assets/flower.svg";
import another from "../Assets/another.svg";
import arrow from "../Assets/arrow.svg";
import { Link } from "react-router-dom";
import GetInTouch from "../GetInTouch/GetInTouch";
import Footer from "../Footer/Footer";
import gsap from "gsap";
function Home() {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let p1 = useRef(null);

  const timeline_home = gsap.timeline();
  useEffect(() => {
    timeline_home.from(
      [text1, text2, text3, text4],
      {
        duration: 1,
        skewY: 15,
        y: 400,
        stagger: {
          amount: 0.2,
        },
      },
      "-=1.2"
    );
    timeline_home.from(p1, {
      duration: 0.6,
      x: -100,
      delay: 0.2,
      opacity: 0,
    });
  });
  return (
    <div className="home">
      <Header timeline={timeline_home} />
      <div className="container">
        <div className="container1">
          <div className="txt-line" id="philip">
            <p ref={(el) => (text1 = el)}>Philip</p>
          </div>
          <div className="txt-line line-bottom" id="hutahaean">
            <p ref={(el) => (text2 = el)}>Hutahaean</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="left-side-quote">
        <p ref={(el) => (p1 = el)}>
          I create didgital experiences that merge art <br /> direction,
          branding, creative strategy, web <br /> design, prototyping, and
          digital interactions.
        </p>
      </div>
      <div className="container">
        <div></div>
        <div className="container1">
          <div className="txt-line" id="digital">
            <p ref={(el) => (text3 = el)}>Digital</p>
          </div>
          <div className="txt-line line-bottom" id="designer">
            <p ref={(el) => (text4 = el)}>Designer</p>
          </div>
        </div>
      </div>
      <div className="flower-svg">
        <img src={flower} alt="" />
      </div>
      <div className="short-about">
        <div className="main-h1-short-about">
          <h1 className="main-short-about">Shortly</h1>
          <h1 className="main-short-about">About</h1>
          <h1 className="main-short-about">MySelf!</h1>
        </div>
        <div className="sub-main-p-short-about">
          <p className="sub-main-short-about">
            HI👋,MY NAME PHILIP JONATHAN HUTAHAEAN I'M AN ACTIVE STUDENT AT
            ADVENTIST UNIVERSITY OF INDONESIA.
          </p>
          <p className="sub-main-short-about">
            AND ALSO A NEWBIE WEB DESIGNER THAT REALLY LIKE PLAYING GAME AND
            THINKING SOMETHING THAT I CANT ACHIEVE LOL.
          </p>
        </div>
        <div className="another-svg">
          <img src={another} alt="" />
        </div>
      </div>
      <div className="my-skills-main-reel">
        <div className="my-skills-reel" id="skill-reel">
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
        </div>
        <div className="skill-set-boxes">
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">HTML5</h1>
            <p className="skill-set-box-p">
              I mainly used to develop Website Markup
            </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">CSS3</h1>
            <p className="skill-set-box-p">
              I use this to style and bring design to browsers
            </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">javascript</h1>
            <p className="skill-set-box-p">
              With this technology i create visual effects and interaction and
              DOM elements
            </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">React.js</h1>
            <p className="skill-set-box-p">
              I loved it! I use it to create applications that have lot of
              reactivity
            </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Sass</h1>
            <p className="skill-set-box-p">
              I prefer this also instead of CSS beacouse of advance
              functionalities
            </p>
            <p>___</p>
          </div>

          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Photoshop</h1>
            <p className="skill-set-box-p">
              Use to edit photos or prototype any website design
            </p>
            <p>___</p>
          </div>

          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Illustrator</h1>
            <p className="skill-set-box-p">
              I use to make svg and edit some particular design
            </p>
            <p>___</p>
          </div>
        </div>
        <div className="project-and-work">
          <h1>
            <Link className="h1-project" to="/projects">
              My Projects and Works <img src={arrow} alt="" />
            </Link>
          </h1>
          <br />
          <p>Click me!</p>
        </div>
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
