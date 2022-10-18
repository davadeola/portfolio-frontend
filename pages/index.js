import Head from "next/head";
import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";
import { ServiceContent, WorkCard } from "../components";
import HeaderTag from "../components/HeaderTag";
import { fetchAPI } from "../lib/api";
//import { useIsInViewPort } from "../customHooks/useInViewPort";

function Home({ projects }) {
  return (
    <>
      <Head>
        <title>David Adeola</title>
        <meta
          name="description"
          content="My name is David Adeola. Hire a UI/UX Designer and Front-end developer in React and Javascript"
        />
        <link rel="icon" href="assets/images/logo.png" />
      </Head>

      <div className="container hero">
        <div className="row">
          <div className="column">
            <h3>My name is David Adeola. I am a</h3>
            <h1>
              UX/UI Designer <span className="accent">&</span> Front-End
              Developer
            </h1>
            <h4>
              I am passionate about innovating creative solutions and building
              enjoyable experiences to solve real problems.
            </h4>
          </div>
          <div className="column">
            <div className="box box1" />
            <div className="box box2" />
            <div className="box box3" />
          </div>
        </div>
      </div>

      <div className="container">
        <HeaderTag title="Featured Works" />

        <div className="row work-row">
          {projects.map((project, id) => (
            <WorkCard project={project} key={id} />
          ))}
        </div>
      </div>
      <div className="container">
        <HeaderTag title="I Offer..." />
        <ServiceContent
          title="Web and Mobile Application Interface Design"
          desc="Utilizing Figma, Adobe XD and Framer, I can create storyboards, draw wireframes, and design high fidelity prototypes to visualize your ideas"
        />
        <ServiceContent title="Application Development" />
        <ServiceContent title="User Experience Design" />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projectRes = await fetchAPI("/projects", {
    populate: ["backgroundImage, tags"],
  });

  return {
    props: {
      projects: projectRes.data,
    },
  };
}

export default Home;
