import React, { useState } from "react";
import styles from "./TimeBox.module.css";
function TimeBox({ time, timeHandler }) {
  // const { time, status } = time;
  const allow = {
    width: "100px",
    height: "50px",
    backgroundColor: "#E9F2F7",
    borderRadius: "10px",
    border: "1px",
    borderColor: "black",
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  };
  const disable = {
    width: "100px",
    height: "50px",
    backgroundColor: "#E9F2F7",
    borderRadius: "10px",
    border: "1px",
    borderColor: "black",
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: "33%",
    cursor: "not-allowed",
    color: "black",
  };
  const selected = {
    width: "100px",
    height: "50px",
    backgroundColor: "black",
    borderRadius: "10px",
    border: "1px",
    borderColor: "black",
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    opacity: "40%",
  };
  const textStyle = {
    textDecoration: "line-through",
  };

  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      // style={
      //   isSelected ? selected : time.status === "allowed" ? allow : disable
      // }
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
