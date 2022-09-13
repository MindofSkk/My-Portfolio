import React from "react";
import styles from "./About.module.css";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styl from "../Contact/Contact.module.css";

import Resume from "../Data/resume.pdf";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Navbar from "../NavBar/Navbar";

const About = () => {
  const newTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div>
      <Container id="about" maxWidth="xl" className={styles.home}>
        <Box className={styles.mainBox}>
          <Box className={styles.leftBox}>
            <Box className={styles.infoBox}>
              <h2>About Me</h2>
              <p></p>
              {/* <p>
                Currently, I am a student at Masai school, learning full-stack
                web development using the MERN stack. Coding is my passion.
                Since childhood, I have been very fond of technology. I started
                coding during my graduation. At the same time, learning HTML and
                CSS from youtube videos. I started liking the concept and wanted
                to become a Full-stack web developer. In Nov 2021, I came to
                know about Masai school via youtube ads, and at that time I
                began my journey toward becoming a Full-stack web developer.
              </p> */}
              {/* <p>
                I am highly skilled in JavaScript, Node, MongoDB, React, HTML
                and CSS.
              </p> */}
              <p>Full -Stack Web Developer with the ability to learn </p>
              <p>
                I hope to work in a dynamic organization that offers
                opportunities and helps in my overall growth and development
                alongside the organization. <br />
                Feel free to contact me at:
                <br />
                <strong> helpmeskk@gmail.com</strong>
              </p>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export { About };
