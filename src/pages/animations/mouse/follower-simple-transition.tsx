import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const App = () => {
  const ref = useRef(null);
  const [hover, sethover] = useState(false);

  const mousePosition = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
    "fps": 30,
  });

  return (
    <motion.div
      className="App h-screen flex items-center justify-center bg-yellow-400"
      ref={ref}
    >
      <motion.div
        layout
        className="cursor size-10  rounded-full fixed top-[-20px] left-[-20px] pointer-events-none mix-blend-overlay"
        animate={{
          x: mousePosition.clientX! - 8,
          y: mousePosition.clientY! - 8,
          backgroundColor: hover ? "red" : "white",
          color: hover ? "white" : "blue",
          scale: hover ? 10 : 1,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
        }}
      />
      <motion.div
        whileHover={{
          scale: 0.9,
        }}
        className="text-[100px] text-black p-10 font-black"
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
      >
        Hover me
        <br />
      </motion.div>
    </motion.div>
  );
};

export default App;
