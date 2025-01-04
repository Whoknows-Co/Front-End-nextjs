import Image from "next/image";
import React from "react";
import Location from "../../public/icons/Location3.svg";
function LocationBox({ address }) {
  const container = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    border: "1px black solid",
    borderRadius: "10px",
    padding: "5px 12px ",
    width: "700px",
    height: "35px",
  };
  const text = {
    fontWeight: "bold",
  };
  return (
    <div style={container}>
      <Image src={Location} width={25} height={25} alt="icon" />
      <p style={text}>{address}</p>
    </div>
  );
}

export default LocationBox;
