import React from "react";
import styles from "../Portfolio/Portfolio.module.css";
import Typewriter from "typewriter-effect";
import profilepic from "../Images/pf.jpg";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Navbar from "../NavBar/Navbar";


const Portfolio = () => {
 
  return (
    <>
      <Navbar />
      <Container id="home" maxWidth="xl" className={styles.contain}>
        <div className={styles.badge}>
          <img
            style={{
              width: "90%",
              height: "100%",
              borderRadius: "50%",
              margin: "auto",
            }}
            alt="Vinesh Nair"
            src={profilepic}
          />
        </div>
        <Box className={styles.name}>
          <h2 style={{fontSize:"40px"}}>Sachin Kumar Keshri</h2>
        </Box>
        <br />
        <Box className={styles.typebox}>
          <h2 style={{ paddingTop: "18px" }}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter, options) => {
                typewriter

                  .typeString("Full Stack Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </h2>
        </Box>
        <Box className={styles.name}>
          <p>
            Full Stack Developer with a passion for development and excited to
            be at the deployment phase of my career as a web developer.
            Proficient in Frontend technology as well as in backend technology.
          </p>
        </Box>

{/* ---------------------add Button------------- */}


      </Container>

      
                   
    </>
  );
};

export { Portfolio };
