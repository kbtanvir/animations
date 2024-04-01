import { useEffect, useState } from "react";

export function useFollowPointer() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // if (!ref.current) return;

    const handlePointerMove = (e: MouseEvent) => {
      setPoint({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}
