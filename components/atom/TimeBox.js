import React, { useState } from "react";
import styles from "./TimeBox.module.css";
function TimeBox({ time, timeHandler }) {
  // const { time, status } = time;

  const textStyle = {
    textDecoration: "line-through",
  };

  // const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={time.status === "available" ? styles.allow : styles.disable}
      onClick={() => {
        if (time.status === "disable") return;
        timeHandler(time);
      }}
    >
      <p style={time.status === "disable" ? textStyle : null}>{time.time}</p>
    </div>
  );
}

export default TimeBox;
