import React from "react";
import { motion } from "framer-motion";
import Tag from "./Tag";
import { getStrapiMedia } from "../lib/media";
import Link from "next/link";

function WorkCard({ project }) {
  const indexContentFade = {
    initial: {
      y: 50,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 1.5,

        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <Link href={`/work/${project.attributes.slug}`}>
      <a>
        <motion.div
          className="workCard"
          style={{
            background: `linear-gradient(11.77deg, #252525 7.74%, rgba(0, 0, 0, 0) 97.93%),
    url(${getStrapiMedia(project.attributes.backgroundImage.data)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          variants={indexContentFade}
        >
          <h3 style={{ fontWeight: "bolder" }}>{project.attributes.title}</h3>
          <h4>{project.attributes.description}</h4>
          <div className="tag-row">
            {project.attributes.tags.map((tag, i) => (
              <Tag tag={tag.tag} key={i} />
            ))}
          </div>
        </motion.div>
      </a>
    </Link>
  );
}

export default WorkCard;
