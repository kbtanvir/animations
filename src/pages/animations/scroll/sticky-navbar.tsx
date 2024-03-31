import { globalStore, useGlobalStore } from "@/utils/global.provider";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Navbar({ children }: { children: React.ReactNode }) {
  const { navBarFixed } = useGlobalStore();

  return (
    <AnimatePresence initial>
      {navBarFixed && (
        <motion.div
          className="fixed flex-center left-0 right-0 h-[100px] w-full bg-indigo-500 shadow-lg opacity-0"
          key={"fixed-navbar"}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100 }}
          // transition={{
          //   y: { type: "spring", stiffness: 300, damping: 30 },
          // }}
        >
          <div className="uppercase  text-6xl font-thin text-white">
            {children}
          </div>
        </motion.div>
      )}
      <motion.div className="absolute flex-center left-0 right-0 top-0 h-[100px] w-full bg-transparent border-b-2">
        <div className="uppercase text-6xl font-thin text-white">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-[101vh] flex-center [&:nth-child(3)]:bg-blue-500 [&:nth-child(4)]:bg-orange-500 [&:nth-child(5)]:bg-emerald-500">
      <span
        className="uppercase text-6xl font-thin text-white"
        style={{
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
function Welcome() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    globalStore.setNavBarFixed(!isInView);
  }, [isInView]);

  return (
    <motion.section ref={ref} className="h-[101vh] flex-center bg-pink-500">
      <span
        className="uppercase text-6xl font-[200] text-white"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Welcome
      </span>
    </motion.section>
  );
}

export default function App() {
  return (
    <div>
      <Navbar>navbar</Navbar>
      <Welcome />
      <Section>in</Section>
      <Section>view!</Section>
    </div>
  );
}
