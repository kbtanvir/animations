import { motion, spring } from "framer-motion";
import { useRef, useState } from "react";
// import "./App.css";
import { useVariants } from "@/hooks/use-follow-pointer";

function App() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);

  const variants = useVariants(ref);

  function buyEnter() {
    setCursorText("✅");
    setCursorVariant("buy");
  }

  function buyLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  function sellEnter() {
    setCursorText("❌");
    setCursorVariant("sell");
  }

  function sellLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <div className="container h-screen  w-screen flex-center" ref={ref}>
      <motion.div
        variants={variants}
        className="fixed flex-center size-10 rounded-full top-0 left-0 pointer-events-none bg-blue-500"
        animate={cursorVariant}
        layout
        transition={spring}
      >
        <span className="cursorText pointer-events-none flex-auto">
          {cursorText}
        </span>
      </motion.div>
      <div>
        <span
          onMouseEnter={buyEnter}
          onMouseLeave={buyLeave}
          className="heading buy"
        >
          Want to Buy ?
        </span>
      </div>
      <div>
        <span
          className="heading sell"
          onMouseEnter={sellEnter}
          onMouseLeave={sellLeave}
        >
          Want to Sell?
        </span>
      </div>
    </div>
  );
}

export default App;
