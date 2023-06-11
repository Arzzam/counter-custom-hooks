import { useState, useEffect } from "react";

const useCounter = (forwardCounter) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(
        forwardCounter === true
          ? (prevCounter) => prevCounter + 1
          : (prevCounter) => prevCounter - 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [forwardCounter]);
  return counter;
};

export default useCounter;
