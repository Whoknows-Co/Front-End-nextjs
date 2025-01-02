import React from "react";
import styles from "./ConsultantReservationsCard.module.css";
import Image from "next/image";
import calendar from "../../public/reserveCard/calendar.svg";

import clock from "../../public/reserveCard/clock.svg";

function ConsultantReservationsCard({ status }) {
  return (
    <div className={styles.card}>
      {status === true && (
        <>
          <div className={styles.status}>
            <p>گدشته</p>
          </div>
          <div className={styles.fade}></div>
        </>
      )}
      <p className={styles.name}>پرنیان خالقی</p>
      <div className={styles.date}>
        <Image src={calendar} height={30} width={28} alt="icon" />
        <p>دوشنبه</p>
        <span>1403/3/3 </span>
      </div>
      <div className={styles.footer}>
        <div>
          <Image src={clock} height={27} width={27} alt="icon" />
          <p> 00:99-00:66</p>
        </div>
        <button
          onClick={() => {
            if (status === true) return;
          }}
        >
          جزئیات بیشتر
        </button>
      </div>
    </div>
  );
}

export default ConsultantReservationsCard;
