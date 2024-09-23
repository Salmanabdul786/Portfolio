import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Generative AI Assistant",
    img: "/one.png",
    gif: "/one.mp4",
    desc: "An AI chat app where users interact with AI and perform image-based searches. It leverages Generative AI for responses, Clerk React for secure authentication, React Query for data management, and ImageKit for image uploads. Content is styled with React Markdown for seamless rendering.",
  },
  {
    id: 2,
    title: "Twitter X",
    img: "/two.png",
    gif: "/two.mp4",
    desc: "A social media platform where users can post, like, and comment on tweets, with real-time updates. Built using React Query for data fetching, Cloudinary for media uploads, and secured with JWT authentication.",
    link:"https://x-twitter-hsmx.onrender.com",
  },
  {
    id: 3,
    title: "Chat App",
    img: "/Three.png",
    gif:"/three.mp4",
    desc: "A real-time chat application where users can send messages and view online status. Utilizes Socket.IO for instant communication, Zustand for state management, JWT for secure authentication, and styled with Tailwind CSS for a responsive and modern user interface.",
    link:"https://chat-app-prod-wjr5.onrender.com",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
          <img 
        src={item.img} 
        alt="Static Preview" 
        className="static-image" 
      />
      
      {/* GIF on hover */}
      <video autoPlay loop muted playsInline
        src={item.gif} 
        type="video/mp4"
        alt="GIF Preview" 
        className="hover-gif" 
      />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;