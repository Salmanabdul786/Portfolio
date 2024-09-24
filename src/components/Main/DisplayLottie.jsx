import React, { useEffect, useRef } from "react";
import lottie from "lottie-web/build/player/lottie_light";
import animation1 from '/src/components/lottie/coding.json';
import animation2 from '/src/components/lottie/Skill4.json';

const GreetingLottie = ({ animationName }) => {
  const containerRef = useRef(null); // Create a ref for the container

  const animations = {
    animation1: animation1,
    animation2: animation2,
  };

  useEffect(() => {
    const animationData = animations[animationName];

    if (animationData && containerRef.current) {
      const animationInstance = lottie.loadAnimation({
        container: containerRef.current, // Use ref instead of id
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      // Cleanup on component unmount
      return () => {
        animationInstance.destroy();
      };
    }
  }, [animationName]);

  return (
    <div ref={containerRef} ></div>
  );
};

export default GreetingLottie;
