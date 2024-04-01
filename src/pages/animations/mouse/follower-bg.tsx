import { motion } from "framer-motion";

import { useEffect, useState } from "react";

export function useFollowPointer() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      setPoint({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}

const App = () => {
  const point = useFollowPointer();

  return (
    <motion.div className="App h-screen flex items-center justify-center bg-[aqua] text-white">
      <motion.div
        layout
        className="absolute bg-pink-500 size-20 top-0 left-0"
        animate={point}
        transition={{
          type: "tween",
          ease: "backOut",
        }}
      />
      <div className="text-3xl font-bold">
        Hover me and see where I am relative to the element:
      </div>
    </motion.div>
  );
};

export default App;
