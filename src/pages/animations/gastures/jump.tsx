import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
  return (
    <>
      <div className="App h-screen flex-center bg-yellow-400 gap-0">
        <div className="grid grid-cols-4">
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </div>
      </div>
    </>
  );
}

function Box() {
  const [isClicked, setIsClicked] = useState(false);

  const jumpAnimation = {
    y: [0, -200, 0],
    x: [0, 100, -200, 100, 0],
    rotate: [0, 360],
    backgroundColor: ["rgba(0,0,0,0)", "#60F", "rgba(0,0,0,0)"],
    transition: {
      // delay: 1,
      duration: 2,
      ease: [0.075, 0.82, 0.165, 1],
      // repeat: Infinity,
      // repeatType: "reverse",
    },
  };

  function handleMouseEnter() {
    if (isClicked === true) {
      return;
    }
    setIsClicked(true);
  }
  function handleMouseLeave() {
    if (isClicked === false) {
      return;
    }
    setIsClicked(false);
  }

  const onAnimationComplete = () => {
    setIsClicked(false);
  };

  return (
    <motion.div
      className="border-4 border-black p-10 size-40 flex-center cursor-pointer"
      animate={isClicked ? jumpAnimation : {}}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      onAnimationComplete={onAnimationComplete}
    />
  );
}
