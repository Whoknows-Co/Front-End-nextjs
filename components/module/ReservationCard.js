import React from "react";
import styles from "./ReservationCard.module.css";

import education from "../../public/icons/Educatoin.svg";
import calender from "../../public/icons/calender.svg";

import Image from "next/image";
function ReservationCard({ executeScroll, moshaver }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Image className={styles.icon} src={education} alt="" />
          <p>
            نوبت دهی اینترنتی با
            {`${moshaver.moshaver_first_name} ${moshaver.moshaver_last_name}`}
          </p>
        </div>
        <span>موسسه ی آموزش های عالی دانشگاه صنعتی شیراز</span>
      </div>
      <div className={styles.main}>
        <div>
          <Image className={styles.icon} src={calender} alt="icon" />
          <p>اولین نوبت آزاد:</p>
        </div>
        <span>07:00-08:00</span>
      </div>

      <div className={styles.footer}>
        <hr className={styles.dashed} />
        <button onClick={executeScroll}>نوبت بگیرید</button>
      </div>
    </div>
  );
}

export default ReservationCard;
