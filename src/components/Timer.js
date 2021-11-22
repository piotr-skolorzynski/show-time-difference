import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

const Timer = ({ lastSeen }) => {
  const [elapsedTime, setElapsedTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const timestamp = Math.round(now.getTime() / 1000);
    let difference = timestamp - lastSeen;
    setElapsedTime(difference);
    let interval;
    let delay;
    if (difference < 60) {
      delay = (60 - difference) * 1000;
      interval = setInterval(() => {
        difference += 1;
        setElapsedTime(difference);
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        setInterval(() => {
          difference += 60;
          setElapsedTime(difference);
        }, 60000);
      }, delay);
    } else {
      setInterval(() => {
        difference += 60;
        setElapsedTime(difference);
      }, 60000);
    }
  }, [lastSeen]);

  return (
    <>
      <Box
        sx={{
          maxWidth: "350px",
          margin: "3rem auto",
          padding: "1.5rem",
          borderRadius: "15px",
          boxShadow: "0 0 5px 5px rgba(0,0,0, .1)",
          textAlign: "center",
        }}
      >
        {elapsedTime &&
          (elapsedTime < 60
            ? `${elapsedTime} seconds ago`
            : `${Math.round(elapsedTime / 60)} minutes ago`)}
      </Box>
    </>
  );
};

export default Timer;
