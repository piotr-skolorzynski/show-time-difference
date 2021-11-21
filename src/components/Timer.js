import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

const Timer = ({ lastSeen }) => {
  const [elapsedTime, setElapsedTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const timestamp = Math.round(now.getTime() / 1000);
      const difference = timestamp - lastSeen;
      setElapsedTime(difference);
    }, 1000);
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
