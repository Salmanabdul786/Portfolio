import GreetingLottie from "./DisplayLottie";
import "./main.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Main = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1>Hi all, I'm Abdul</motion.h1>
          <motion.p>
            I am a driven Full Stack developer passionate about creating
            innovative web applications. With a strong foundation in both
            front-end and back-end development, I constantly seek out new
            technologies and embrace problem-solving. Eager to learn and grow, I
            thrive in collaborative environments, consistently delivering
            impactful results through teamwork and dedication.
          </motion.p>
          <motion.div className="button">
            <a
              href="https://drive.google.com/file/d/1nkf7Gw1dlXpCQ8KZH_WAsh2kke-78sJ0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button>See My Resume</motion.button>
            </a>
            <a href="#Contact Me">
              <motion.button>Connect me</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="sliding"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Web Developer
      </motion.div>

      <div className="image">
        <GreetingLottie animationPath="/src/components/lottie/coding.json" />
      </div>
    </div>
  );
};

export default Main;
