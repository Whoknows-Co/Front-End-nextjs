import React, { useState } from "react";
import styles from "./TimeBox.module.css";
import timeEditor from "../../utils/timeEditor";
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
        if (time.status === "unavailable") return;
        timeHandler(time);
      }}
    >
      <p style={time.status === "unavailable" ? textStyle : null}>
        {timeEditor(time.start_time)}-{timeEditor(time.end_time)}
      </p>
    </div>
  );
}

export default TimeBox;
