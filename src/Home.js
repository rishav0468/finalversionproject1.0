import React from "react";
import logo from "./Group 4.svg";
import btnsorting from "./btnsorting.svg";
import btncompare from "./btn-compare.svg";
import btnnqueen from "./btn-nqueen.svg";
import rectangle from "./binarytreelogo.svg";
import btnsearch from "./serch.svg";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./home.css";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      {/* <div>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sorting">Sorting</a>
        </li>
      </div> */}

      <div className="mainw">
        <div className="leftc">
          <div className="home-head">
            <h1>VisualAlgo</h1>
            <div className="logoc">
              <img className="home-logo" src={logo} />
            </div>
          </div>
          <div className="hero-section">
            <h2>
              <span style={{ color: "#A6FF16", fontSize: "60px" }}>
                Discover
              </span>{" "}
              <br></br>the beauty <br></br>of Algorithms
            </h2>
            <span className="home-info">
              VisualAlgo is tool that visualize <br></br>algorithms through
              interactive<br></br>
              animations.<br></br>
            </span>
            <button className="home-button">About Project</button>
          </div>
        </div>
        <div className="rightc">
          <div className="right-w">
            <div className="particlesdiv">
              <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  background: {
                    color: {
                      value: "#151515"
                    }
                  },
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push"
                      },
                      onHover: {
                        enable: true
                      },
                      resize: true
                    },
                    modes: {
                      push: {
                        quantity: 4
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      }
                    }
                  },
                  particles: {
                    color: {
                      value: "#ffffff"
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.3,
                      width: 1
                    },
                    collisions: {
                      enable: true
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce"
                      },
                      random: false,
                      speed: 3,
                      straight: false
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800
                      },
                      value: 80
                    },
                    opacity: {
                      value: 0.5
                    },
                    shape: {
                      type: "circle"
                    },
                    size: {
                      value: { min: 1, max: 5 }
                    }
                  },
                  detectRetina: true
                }}
              />
            </div>
            <a href="/sorting">
              <div className="home-card" id="card-sorting">
                <img
                  className="home-btn-sorting"
                  src={btnsorting}
                  style={{ width: 200, height: 280, borderRadius: 5 }}
                />
              </div>
            </a>
            <a href="/sorting2">
              <div className="home-card">
                <img
                  src={btncompare}
                  style={{ width: 200, height: 280, borderRadius: 5 }}
                />
              </div>
            </a>
            <a href="/backtracking">
              <div className="home-card">
                <img
                  src={btnnqueen}
                  style={{ width: 200, height: 280, borderRadius: 5 }}
                />
              </div>
            </a>

            <a href="/searching">
              <div className="home-card">
                <img
                  src={btnsearch}
                  style={{ width: 200, height: 280, borderRadius: 5 }}
                />
              </div>
            </a>

            <a href="/binarytree">
              <div className="home-card">
                <img
                  src={rectangle}
                  style={{ width: 200, height: 280, borderRadius: 5 }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
