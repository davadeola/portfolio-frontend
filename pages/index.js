import Head from "next/head";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { ServiceContent, WorkCard } from "../components";
import HeaderTag from "../components/HeaderTag";
import { fetchAPI } from "../lib/api";
import { gsap } from "gsap";
//import { useIsInViewPort } from "../customHooks/useInViewPort";

function Home({ projects }) {
  const svgRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".turbulence", 3, { attr: { baseFrequency: "0 0" } });
    }, svgRef);

    return () => ctx.revert();
  }, []);

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
            <svg ref={svgRef}>
              <filter id="noise" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                  baseFrequency="0.02 0.05"
                  result="NOISE"
                  numOctaves="1"
                  className="turbulence"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="NOISE"
                  scale="20"
                ></feDisplacementMap>
              </filter>
            </svg>

            <img
              height="400"
              src="/assets/images/david.png"
              width="400"
              className="davidImage"
              style={{
                height: "20em",
                width: "20em",
                borderRadius: "500px",
                position: "absolute",
                top: "5%",
                left: "25%",
                transform: "rotate(3.2deg)",
                filter: "url(#noise)",
              }}
            />
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
