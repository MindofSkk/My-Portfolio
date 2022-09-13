import React from "react";
import styles from "./skk.module.css";

export const SAbout = () => {
 
  
  return (
    <div className={styles.aboutmain}>
      <div className={styles.abouta}>
        <img
          align="center"
          src="https://raw.githubusercontent.com/mhmzdev/mhmzdev/master/code.gif"
          width="450"
          height="280"
           className={styles.cimg}
      
        />
      </div>
      <div className={styles.aboutb}>
        <h2>About Me</h2>
        <hr />
        <p>
          Full-Stack Web Developer with the ability to learn and collaborate in
          rapidly changing environments and compositions. Worked through 1000+
          hours of Bootcamp structure learning JavaScript , Node.js , React.js ,
          MongoDB , Express , HTML5 , and CSS3.
        </p>
      </div>
    </div>
  );
};
