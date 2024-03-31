import { useFollowPointer } from "@/hooks/use-follow-pointer";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function App() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="h-screen w-screen bg-black">
      <motion.div
        ref={ref}
        className="absolute z-10 pointer-events-none size-[200px] bg-pink-500   rounded-full"
        animate={{
          x: x,
          y: y,
        }}
        // transition={{
        //   type: "spring",
        //   damping: 5,
        //   stiffness: 60,
        //   restDelta: 0.001,
        // }}
      />
    </div>
  );
}
