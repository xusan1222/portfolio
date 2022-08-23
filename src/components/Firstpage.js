import React from "react";
import { Fade } from "react-reveal";
import "./style.css";
import facebook from '../ptotos/facebook-app-symbol.png'
import instagram from '../ptotos/instagram.png'
import telegram from '../ptotos/telegram.png'
import rightImg from '../ptotos/undraw_feeling_proud_qne1.svg'
import { Link } from "react-scroll";




export default function Firstpage() {

  const style ={
    display:'inlineBlock'
  }


  return (
    <>
      <div className="fristDiv">
          <div className="menuLeft">
            <div className="socialLogo">
              <a href="https://www.facebook.com/xusan.ibragimov.121" target="_blank">
            <img className="img" src={facebook}/>
              </a>
            <a href="https://www.instagram.com/xusan.1222/" target='_blank'>
            <img className="img" src={instagram}/>
            </a>
            <a href="https://t.me/xusan1222" target='_blank'>
            <img className="img" src={telegram}/>
            </a>
            </div>
          </div>
        <div className="links">
          <Fade left>
            
          <button className="button"><Link style={style} to="firstDiv" spy smooth> <h2  >Home</h2></Link>  </button>
            
          </Fade>
          <Fade left>
            <button className="button"> 
            <Link style={style} spy smooth to="thirdDiv"><h2>About me</h2></Link>
            </button>
            
          </Fade>
          <Fade left>
            <button className="button">
            <Link style={style} spy smooth to=" secondDiv"> 
            <h2>Projects</h2>
            </Link>
            </button>
          </Fade>
          <Fade left>
            <button className="button">
            <Link style={style} spy smooth to="fourthDiv">

            <h2>Contact</h2>
            </Link>
            </button>
          </Fade>
        </div>
        <Fade top>
          <div className="logo">
            <div className="h1">
              <h1>1222</h1>
            </div>
            <div className="logoEffect"></div>
          </div>
        </Fade>
        <div className="center">
          <div className="centerLeft" >
              <Fade bottom >
              <h1>Hi, I'm Hero</h1>
              <br />
              <br />
              <br />
              <h3>
                I'm javascript(react) web developer <br />
                and i'ts my portfolio that tels to you about me 
              </h3>
              {/* <button className="cv">CV</button> */}
              </Fade>
          </div>
          <div className="centerRight">
            <Fade top>
            <img className="rightImg" src={rightImg} />
            </Fade>
          </div>
        </div>
        <div>
     
        </div>
      </div>
      
    </>
  );
}
