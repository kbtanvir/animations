import { linePaths } from "@/lib/const";
import { motion } from "framer-motion";
import { useCallback } from "react";

export default function Page() {
  const draw = useCallback(() => {
    return {
      hidden: { pathLength: 0, opacity: 0 },
      visible: (i: number) => {
        const delay = 1 + i * 0.5;
        return {
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
            opacity: { delay, duration: 0.01 },
          },
        };
      },
    };
  }, []);

  return (
    <div className="flex-center min-h-screen gap-2 bg-black">
      {linePaths.map((item, i) => (
        <motion.svg
          key={i}
          initial="hidden"
          animate="visible"
          width={item.w}
          height={182}
          viewBox={`0 0 ${item.w} ${182}`}
          fill="none"
          className={"outline-none"}
          whileHover={{ scale: 1.2 }}
          // onHoverStart={e => {}}
          // onHoverEnd={e => {}}
          transition={{
            scale: { type: "spring", duration: 2.5, bounce: 0.6 },
          }}
        >
          <motion.path
            d={item.d}
            className={"stroke-green-500 stroke-[10px]"}
            variants={draw()}
            custom={i}
          />
        </motion.svg>
      ))}
    </div>
  );
}
