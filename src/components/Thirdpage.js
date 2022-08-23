import React from "react";
import "./Third.css";
import thirdimg from "../ptotos/undraw_startup_life_re_8ow9.svg";
import { Fade } from "react-reveal";
import me from "../ptotos/hacker.gif";
import knowladge from "../ptotos/mortarboard.gif";

export default function Thirdpage() {
  return (
    <>
      <div className="thirdDiv">
        <Fade left>
          <h1 className="about"> ABOUT ME</h1>
        </Fade>
        {/* <img className="thirdimg" src={thirdimg} /> */}
        <Fade>
          <div className="informations">
            <h1 className="name">Ibragimov Khusan</h1>
            <div className="aboutme">
              <img className="gif" src={me} />
              <h2>
                I'm Ibragimov Khusan web developer and im 17 y.o. I can
                build your web site from zero to hero
              </h2>
            </div>
            <div className="myknowladge">
              <img className="gif" src={knowladge} />
                <h2>Knowladge</h2>
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>java script</li>
                <li>react</li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
