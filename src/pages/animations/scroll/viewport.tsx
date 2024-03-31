import { globalStore } from "@/utils/global.provider";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    globalStore.setNavBarFixed(!isInView);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="h-[101vh] bg-black flex-center [&:nth-child(2)]:bg-[#0077ff] [&:nth-child(3)]:bg-[#ffaa00] [&:nth-child(4)]:bg-[#00ff55]"
    >
      <span
        className="text-6xl font-bold text-white"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <Section>Content</Section>
      <Section>in</Section>
      <Section>view!</Section>
    </div>
  );
}
