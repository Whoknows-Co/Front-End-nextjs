import React from "react";
import styles from "./ReservationCard.module.css";

import education from "../../public/icons/Educatoin.svg";
import calender from "../../public/icons/calender.svg";

import Image from "next/image";
function ReservationCard({ executeScroll }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Image src={education} alt="" />
          <p>نوبت دهی اینترنتی با پرنیان خالقی</p>
        </div>
        <span>موسسه ی آموزش های عالی دانشگاه صنعتی شیراز</span>
      </div>
      <div className={styles.main}>
        <div>
          <Image src={calender} alt="" />
          <p>انتخاب نوبت مشاوره:</p>
        </div>
        <select name="" id=""></select>
      </div>
      <hr className={styles.dashed} />
      <div className={styles.footer}>
        <button onClick={executeScroll}>نوبت بگیرید</button>
      </div>
    </div>
  );
}

export default ReservationCard;
