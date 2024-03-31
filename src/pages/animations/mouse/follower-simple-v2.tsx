import { useRef } from "react";
// import "./App.css";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";

const App = () => {
  const ref = useRef(null);
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // Set cursor variant to change color on hover text
  const mousePosition = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
    "fps": 30,
  });

  return (
    <motion.div
      className="App h-screen flex items-center justify-center bg-[aqua]"
      ref={ref}
    >
      <motion.div
        layout
        className="cursor size-5 bg-black rounded-full fixed top-[-20px] left-[-20px] pointer-events-none"
        animate={{
          x: mousePosition.clientX! - 8,
          y: mousePosition.clientY! - 8,
        }}
        transition={{
          type: 'just',
        }}
      />
      <div>
        Hover me and see where I am relative to the element:
        <br />
        x: ${mousePosition.x}
        y: ${mousePosition.y}
      </div>
    </motion.div>
  );
};

export default App;
