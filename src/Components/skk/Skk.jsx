import React from "react";
import styles from "./skk.module.css";
import newpic from "../Images/newpic.png";
import c from "../Images/c.png";
import { Button } from "@material-ui/core";
import Resume from "../Data/resume.pdf";
import Navbar from "../NavBar/Navbar";

export const Skk = () => {
  return (
   <div>
    <Navbar/>
     <div className={styles.main}>
      
      <div className={styles.a}>
        <div className={styles.imgbox}>
          <img src={newpic} width="100%" height="100%"></img>
        </div>
      </div>
      <div>
        <div className={styles.textcontent}>
          <h1 style={{color:"rgb(46, 245, 169)"}}>
            {" "}
            Hi 👋, I'am <br /> Sachin Kumar Keshri
          </h1>

          <p style={{ color: "white" }}>
            Full Stack Developer with a passion for development and excited to
            be at the deployment phase of my career as a web developer. <br />
            Proficient in Frontend technology as well as in backend technology.
          </p>
          <br />
          <button className={styles.button5}>
            <a href={Resume} className={styles.A}>
              My Resume
            </a>
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};
