import React from "react";
import Fade from "react-reveal";
import centerImg from "../ptotos/undraw_react_re_g3ui.svg";
import "./style.css";
import toDo from "../ptotos/todo.png";
import countDown from "../ptotos/countdown.png";
import weather from "../ptotos/weather.png";
import convertor from "../ptotos/convertor.png";
import shop from "../ptotos/shop.png";
import chat from "../ptotos/chat.png";


export default function Secondpage() {
  return (
    <>
      <div className="secondDiv">
        <img className="centerImg" src={centerImg} />
        <div className="projects">
          <Fade top>
            <div className="project">
              <img src={toDo} />
              <a
                href="https://codesandbox.io/s/optimistic-tharp-16vm60"
                target="_blank"
              >
                <button>Demo</button>
              </a>
            </div>
          </Fade>
          <Fade top>
            <div className="project">
              <img src={countDown} />
              <a
                href="https://codesandbox.io/s/wonderful-wave-byg50c"
                target="_blank"
                >
                <button>Demo</button>
              </a>
            </div>
          </Fade>
          <Fade top>
            <div className="project">
              <img src={weather} />
              <a
                href="https://codesandbox.io/s/muddy-star-q3g42q"
                target="_blank"
              >
              <button>Demo</button>
              </a>
            </div>
          </Fade>
          <Fade top>
            <div className="project">
              <img src={convertor} />
              <a href="https://1cymq9.csb.app/ " target="_blank">
                <button>Demo</button>
              </a>
            </div>
          </Fade>
          <Fade top>
            <div className="project">
            <img src={shop} />
              <a href=" https://nltkw7.csb.app/" target="_blank">
                <button>Demo</button>
              </a>
            </div>
          </Fade>
          <Fade top>
            <div className="project">
            <img src={chat} />
              <a href=" https://9u9d8o.csb.app/" target="_blank">
                <button>Demo</button>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
