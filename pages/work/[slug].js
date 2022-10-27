import React from "react";
import { HeaderTag, NextImage } from "../../components";
import Tag from "../../components/Tag";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import withTransition from "../../lib/withTransition";

const Work = ({ work }) => {
  const {
    title,
    role,

    solution,
    problem,
    caseLink,
    timeCompleted,
    tags,
    mockup_prototype,
  } = work.attributes;

  const content = {
    animate: {
      transition: { staggerChildren: 0.2, delayChildren: 1.5 },
    },
  };

  const titleFade = {
    initial: {
      y: 20,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }}>
      <motion.div
        className="container"
        animate="animate"
        initial="initial"
        variants={content}
      >
        <motion.div
          className="row"
          style={{ wordBreak: "break-word" }}
          variants={titleFade}
        >
          <div
            style={{
              paddingTop: "2em",
              paddingBottom: "2em",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <h2>{title}</h2>
          </div>
        </motion.div>
        <motion.div
          style={{ display: "flex", justifyContent: "space-between" }}
          variants={titleFade}
        >
          <div>
            <Link href={caseLink}>
              <button className="btn btn-primary">Read Case Study</button>
            </Link>
          </div>

          <div className="tag-row">
            {tags.map((tag, i) => (
              <Tag tag={tag.tag} key={i} />
            ))}
          </div>

          <p>{timeCompleted}</p>
        </motion.div>

        <div style={{ marginTop: "64px" }}>
          <div className="row">
            <motion.div
              style={{
                display: "flex",
                gap: "64px",
                flexDirection: "column",
                paddingRight: "5rem",
              }}
              variants={titleFade}
            >
              <div>
                <HeaderTag title="The Problem" />
                <p>{problem}</p>
              </div>
              <div>
                <HeaderTag title="The Solution" />
                <p>{solution}</p>
              </div>
              <div>
                <HeaderTag title="My Role" />
                <p>{role}</p>
              </div>
            </motion.div>
            <motion.div variants={titleFade}>
              <NextImage image={mockup_prototype} />
            </motion.div>
          </div>

          <div className="row"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export async function getStaticPaths() {
  const workRes = await fetchAPI("/projects", { fields: ["slug"] });

  return {
    paths: workRes.data.map((work) => ({
      params: {
        slug: work.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const workRes = await fetchAPI("/projects", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });

  return {
    props: { work: workRes.data[0] },
    revalidate: 1,
  };
}

export default Work;
