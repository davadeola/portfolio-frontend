import { motion } from "framer-motion";
import { Component } from "react";

const withTransition = (OriginalComponent) => {
  return class WithTransition extends Component {
    render() {
      const transitionBoxIn = {
        initial: {
          height: "0vh",
          top: 0,
        },

        animate: {
          height: ["0vh", "100vh", "0vh"],

          transition: {
            duration: 2,
            times: [0, 0.2, 1],
            ease: [0.87, 0, 0.13, 1],
          },
        },
      };

      return (
        <>
          <motion.div
            className="slide-out"
            initial="initial"
            animate="animate"
            variants={transitionBoxIn}
            onAnimationStart={() =>
              document.body.classList.add("overflow-hidden")
            }
            onAnimationComplete={() => {
              document.body.classList.remove("overflow-hidden");
            }}
            exit={{ opacity: 0 }}
          />

          <OriginalComponent {...this.props} />
        </>
      );
    }
  };
};

export default withTransition;
