import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
  return (
    <>
      <div className="App h-screen flex-center bg-yellow-400 gap-0 relative">
        <div className="grid grid-cols-4">
          {Array(16)
            .fill(0)
            .map((_,i) => (
              <Box key={i}/>
            ))}
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
    backgroundColor: ["rgba(0,0,0,0)", "#ff0000", "rgba(0,0,0,0)"],
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

  const onAnimationComplete = () => {
    setIsClicked(false);
  };

  return (
    <motion.div
      className="border-[4px] border-black p-10 size-40 flex-center cursor-pointer mb-[-4px] mr-[-4px] text-[80px] fill-none"
      animate={isClicked ? jumpAnimation : {}}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onAnimationComplete={onAnimationComplete}
    ></motion.div>
  );
}
