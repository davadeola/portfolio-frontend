import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column">
            <h2>About Me</h2>
            <p>
              Hi, my name is David Adeola. I am a passionate creative who loves
              giving modern solutions to real-world problems. My love for the
              simple things in life has inspired my philosophy of using the most
              basic shapes and ideas to conquer the most complex challenges.
              <br /> <br />
              As a result,I fell in love with UI/UX design as I am able to
              express my creativity as well as my problem-solving skills to
              build accessible and enjoyable products and experiences. You’re
              welcome to explore my portfolio to view samples of my work.
              <br />
              <br />
              Moreover, I enjoy karaoke, video games, and reading. I am
              currently residing in Nairobi, Kenya as a student pursuing my
              Bachelor’s Degree in Computer Science and Informatics.
            </p>
            <button className="btn">Get Resume</button>
          </div>
          <div className="column">
            <div className="image-container">
              <Image src="/assets/images/david.png" height={400} width={400} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
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
        </div>
      </div>
    </>
  );
};

export default about;
