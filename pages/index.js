import Head from "next/head";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { ServiceContent, WorkCard } from "../components";
import HeaderTag from "../components/HeaderTag";
import { fetchAPI } from "../lib/api";
import { useAnimation, motion } from "framer-motion";
import withTransition from "../lib/withTransition";
import { useIsInViewPort } from "../customHooks/useInViewPort";

function Home({ projects }) {
  const workRef = useRef();
  const serviceRef = useRef();
  const isWorkInView = useIsInViewPort(workRef);
  const isServiceInView = useIsInViewPort(serviceRef);
  const workControls = useAnimation();
  const serviceControls = useAnimation();

  const workContent = {
    animate: {
      transition: { staggerChildren: 0.5, delayChildren: 0.5 },
    },
  };

  const serviceContent = {
    animate: {
      transition: { staggerChildren: 0.5, delayChildren: 1 },
    },
  };

  useLayoutEffect(() => {
    if (isWorkInView) {
      workControls.start("animate");
    }
  }, [workControls, isWorkInView]);

  useLayoutEffect(() => {
    if (isServiceInView) {
      serviceControls.start("animate");
    }
  }, [serviceControls, isServiceInView]);

  const titleHomeFade = {
    initial: {
      y: 30,
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

      <motion.div className="container hero" exit={{ opacity: 0 }}>
        <motion.div
          className="row"
          initial="initial"
          animate="animate"
          variants={titleHomeFade}
        >
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

            <div className="box box3"></div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="container" id="work">
        <HeaderTag title="Featured Works" />

        <motion.div
          className="row work-row"
          animate={workControls}
          initial="initial"
          ref={workRef}
          variants={workContent}
        >
          {projects.map((project, id) => (
            <WorkCard project={project} key={id} />
          ))}
        </motion.div>
      </motion.div>
      <div className="container">
        <HeaderTag title="I Offer..." />
        <motion.div
          animate={serviceControls}
          initial="initial"
          ref={serviceRef}
          variants={serviceContent}
        >
          <ServiceContent
            title="Web and Mobile Application Interface Design"
            desc="Utilizing Figma, Adobe XD and Framer, we can create storyboards, draw wire-frames, and design high fidelity prototypes to visualize your ideas"
          />
          <ServiceContent
            title="Application Development"
            desc="I specialize in building web applications using the React Javascript framework whether you need an E-commerce site to boost your sales or a new brand page. In addition, we could use popular low code platforms such as Wix or Webflow to visualize your ideas and capitalize on the content management services"
          />
          <ServiceContent
            title="User Experience Design"
            desc="Plan and map your user journeys with us in order to create amazing experiences for them and increase your sales. We also offer user testing and project validation for small enterprises and startups"
          />
        </motion.div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const projectRes = await fetchAPI("/projects", {
    populate: ["backgroundImage, tags"],
  });

  return {
    props: {
      projects: projectRes.data,
    },
  };
};

export default withTransition(Home);
