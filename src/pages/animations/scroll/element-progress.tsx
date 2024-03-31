import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function App() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const smoothProgress = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <div className="bg-black min-h-screen flex-center w-full">
        <div className="">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="fixed top-20 left-20 "
            style={{
              transform: "rotate(-90deg)",
            }}
          >
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-[10px] fill-none stroke-white opacity-30"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-[10px] stroke-white"
              style={{ pathLength: smoothProgress }}
            />
          </svg>
          <div
            ref={ref}
            className="flex h-[300px] overflow-x-scroll py-10 w-[600px]"
          >
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className="mr-10 bg-white basis-[200px] grow-0 shrink-0"
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
