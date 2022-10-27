import React, { useLayoutEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import withTransition from "../lib/withTransition";
import { useIsInViewPort } from "../customHooks/useInViewPort";

const about = () => {
  const cvRef = useRef(null);

  const controls = useAnimation();
  const isInView = useIsInViewPort(cvRef);

  useLayoutEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [controls, isInView]);

  const titleFade = {
    initial: {
      y: 20,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 1,
        delay: 1.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cvFade = {
    initial: {
      y: 20,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 1,

        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }}>
      <motion.div
        className="container hero"
        initial="initial"
        animate="animate"
        variants={titleFade}
      >
        <div className="row">
          <div className="column">
            <h1>Who is David Adeola?</h1>
            <p style={{ padding: "3em 15em 1em 0em", fontWeight: "300" }}>
              My love for the simple things in life has inspired my philosophy
              of using the most basic shapes and ideas to conquer the most
              complex challenges.
              <br /> <br />
              As a result, I fell in love with UI/UX design as I am able to
              express my creativity as well as my problem-solving skills to
              build accessible and enjoyable products and experiences. You’re
              welcome to explore my portfolio to view samples of my work.
              <br />
              <br />
              For fun, I enjoy karaoke, video games, and reading books and
              articles
            </p>
            <button className="btn btn-primary">Get Resume</button>
          </div>
        </div>
      </motion.div>
      <div className="container">
        <motion.div
          className="row"
          initial="initial"
          variants={cvFade}
          animate={controls}
          ref={cvRef}
        >
          <div className="column">
            <h3>Education</h3>
            <div className="about-entry">
              <h4>Google UX Design Professional Certificate</h4>
              <p>Coursera</p>
              <small>September 2022</small>
            </div>

            <div className="about-entry">
              <h4>Google Android Development Certificate</h4>
              <p>Plurasight</p>
              <small>September 2022</small>
            </div>

            <div className="about-entry">
              <h4>Bachelor’s of Science in Informatics and Computer Science</h4>
              <p>Strathmore University</p>
              <small>September 2022</small>
            </div>
          </div>
          <div className="column">
            <h3>Experience</h3>

            <div className="about-entry">
              <h4>UX Research Intern</h4>
              <p>ILAB Research Institute</p>
              <small>April 2021</small>
            </div>

            <div className="about-entry">
              <h4>Freelance Developer</h4>
              <p>Remote</p>
              <small>Present</small>
            </div>
          </div>
          <div className="column">
            <h3>Skills</h3>

            <div className="about-entry">
              <h4>Programming Languages</h4>
              <p>HTML, CSS, Javascript, Java, Kotlin, PHP, Typescript</p>
            </div>

            <div className="about-entry">
              <h4>Development Frameworks</h4>
              <p>React, React Native, Android</p>
            </div>

            <div className="about-entry">
              <h4>Design Tools</h4>
              <p>Figma, Adobe XD, Adobe Photoshop</p>
            </div>

            <div className="about-entry">
              <h4>Languages</h4>
              <p>English, Kiswahili, French</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default withTransition(about);
