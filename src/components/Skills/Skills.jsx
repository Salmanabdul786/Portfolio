
import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";
import GreetingLottie from "../Main/DisplayLottie";
import { Icon  } from "@iconify/react";


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      
    >
     
      <motion.div className="titleContainer" >
  
        <div className="title">
         
       <GreetingLottie animationName="animation2"/>
        </div>
        <h3>
            <motion.b style={{color:"orange"}}>A FULL-STACK DEVELOPER</motion.b> PASSIONATE ABOUT EXPLORING AND MASTERING EVERY TECH STACK ACROSS THE SOFTWARE DEVELOPMENT SPECTRUM.
          </h3>
      </motion.div>
      <motion.div className="skillContainer" variants={variants}>
      
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
     
        <Icon  icon="devicon:mongodb"/>
        <p className="skillText">Mongodb</p>

        </motion.div>
   
        <motion.div
          className="box"
          whileHover={{  background: "lightgray", color: "black" }}
        >
          <Icon icon="skill-icons:expressjs-dark"/>
          <p className="skillText">Express.js</p>

        
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        ><Icon icon="logos:react"/>
        <p className="skillText">React</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
         <Icon icon="devicon:nodejs"/>
         <p className="skillText">Node.js</p>

        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
         <Icon icon="akar-icons:github-fill"/>
         <p className="skillText">Github</p>

        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
         <Icon icon="simple-icons:render" />
         <p className="skillText">Render</p>

        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
         <Icon  icon="catppuccin:database"/>
         <p className="skillText">SQL</p>

        </motion.div>
        <motion.div
          className="box"
          whileHover={{ content:"github", background: "lightgray", color: "black" }}
        >
         <Icon icon="skill-icons:postman"/>
         <p className="skillText">Postman</p>
        </motion.div>
      
      </motion.div>
  
     
    </motion.div>
    
  );
};

export default Services;
