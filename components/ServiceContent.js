import React, { useState } from "react";
import { animate, motion } from "framer-motion";

function ServiceContent({ title, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  const indexContentFade = {
    initial: {
      y: 30,
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

  const lineScale = {
    initial: {
      width: 0,
      opacity: 0,
    },

    animate: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      style={{ padding: "2.5em 5em 0 5em" }}
      variants={indexContentFade}
    >
      <div
        className="row"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        <p style={{ padding: "0em 0em 1.5em 0em" }}>{title}</p>{" "}
        <h3 style={{ textAlign: "right" }}>{isOpen ? "-" : "+"}</h3>
      </div>
      {isOpen && (
        <motion.p
          style={{ padding: "0em 0rem .5rem 0rem", fontWeight: "300" }}
          initial="initial"
          variants={indexContentFade}
          animate="animate"
        >
          {desc}
        </motion.p>
      )}
      <motion.div className="divider" variants={lineScale} />
    </motion.div>
  );
}

export default ServiceContent;
