import React from "react";
import styles from "./ReservationCard.module.css";
function ReservationCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src="../../../public/icons/Educatoin.svg" alt="" />
          <p>نوبت دهی اینترنتی با پرنیان خالقی</p>
        </div>
        <span>موسسه ی آموزش های عالی دانشگاه صنعتی شیراز</span>
      </div>
      <div className={styles.main}>
        <div>
          <img src="../../../public/icons/calender.svg" alt="" />
          <p>انتخاب نوبت مشاوره:</p>
        </div>
        <select name="" id=""></select>
      </div>
      <hr className={styles.dashed} />
      <div className={styles.footer}>
        <button>نوبت بگیرید</button>
      </div>
    </div>
  );
}

export default ReservationCard;
