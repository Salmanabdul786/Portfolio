import React, { useEffect } from "react";
import lottie from "lottie-web/build/player/lottie_light";
import animation1 from '/src/components/lottie/coding.json';
import animation2 from '/src/components/lottie/Skill4.json';

const GreetingLottie = ({ animationName }) => {
  const animations = {
    animation1: animation1,
    animation2: animation2,
  };

  useEffect(() => {
    const animationData = animations[animationName]; // Select the correct animation based on prop
    
    if (animationData) {
      const animationInstance = lottie.loadAnimation({
        container: document.getElementById("lottie-container"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData, // Use the correct animation data
      });

      // Cleanup on component unmount
      return () => {
        animationInstance.destroy(); // Destroy the animation instance
      };
    }
  }, [animationName]);

  return (
    <div id="lottie-container" ></div>
  );
};

export default GreetingLottie;
