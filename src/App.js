import React, { useRef, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import gsap from "gsap";
function App() {
  let cursor = useRef(null);
  let posX1 = useRef(null);
  let posY1 = useRef(null);
  let mouseX1 = useRef(null);
  let mouseY1 = useRef(null);

  let tl = gsap.timeline();
  let tl2 = gsap.timeline();

  useEffect(() => {
    let posX = posX1.current;
    let posY = posY1.current;
    let mouseX = mouseX1.current;
    let mouseY = mouseY1.current;
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set(cursor, {
          css: {
            left: posX - 50,
            top: posY - 50,
          },
        });
      },
    });
    document.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
    tl2.from(
      cursor,
      {
        duration: 1.5,
        delay: 2,
        opacity: 0,
      },
      "-=1"
    );
  });
  return (
    <div>
      <Router>
        <div className="noise"></div>
        <div className="App">
          <ScrollToTop />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
          </Switch>
          <Switch>
            <Route path="/projects" exact>
              <Projects />
            </Route>
          </Switch>
          <Switch>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
          <div className="cursor-follower" ref={(el) => (cursor = el)}></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
