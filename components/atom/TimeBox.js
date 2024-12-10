import React, { useState } from "react";
import styles from "./TimeBox.module.css";
function TimeBox({ time, timeHandler }) {
  // const { time, status } = time;

  const textStyle = {
    textDecoration: "line-through",
  };

  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={
        isSelected
          ? styles.selected
          : time.status === "allowed"
          ? styles.allow
          : styles.disable
      }
      onClick={() => {
        if (time.status === "disable") return;
        timeHandler(time);
        setIsSelected(() => !isSelected);
      }}
    >
      <p style={time.status === "disable" ? textStyle : null}>{time.time}</p>
    </div>
  );
}

export default TimeBox;
