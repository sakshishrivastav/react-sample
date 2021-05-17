import { useLayoutEffect, useState } from "react";

const useContainerDimensions = myRef => {
  
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    useLayoutEffect(() => {
      const getDimensions = () => ({
        width: myRef.current.clientWidth,
        height: myRef.current.clientHeight
      })
      const handleResize = () => {
        setDimensions(getDimensions())
      }
      if (myRef.current) {
        setDimensions(getDimensions());
      }
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [myRef])  
    return dimensions;
  };

  export default useContainerDimensions;