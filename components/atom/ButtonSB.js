import Image from "next/image";
import React from "react";

function ButtonSB({ txt, imgUrl, bColor, fn }) {
  const styles = {
    backgroundColor: bColor,
    width: "250px",
    height: "62px",
    // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    border: "1px solid",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    paddingRight: "14px",
    fontSize: "16px",
    fontWeight: "bold",
    gap: "10px",
    color: "#023047",
  };
  return (
    <button style={styles} onClick={fn}>
      <Image src={imgUrl} alt="" />
      {txt}
    </button>
  );
}

export default ButtonSB;
