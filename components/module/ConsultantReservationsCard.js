import React from "react";
import styles from "./ConsultantReservationsCard.module.css";
import Image from "next/image";
import calendar from "../../public/reserveCard/calendar.svg";

import clock from "../../public/reserveCard/clock.svg";

function ConsultantReservationsCard({
  reserve,
  status,
  setShowModal,
  setModalData,
}) {
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
      <p className={styles.name}>
        {reserve.student_first_name} {reserve.student_last_name}
      </p>
      <div className={styles.date}>
        <Image src={calendar} height={30} width={28} alt="icon" />
        <p>دوشنبه</p>
        <span>{reserve.date} </span>
      </div>
      <div className={styles.footer}>
        <div>
          <Image src={clock} height={27} width={27} alt="icon" />
          <p> {reserve.time}</p>
        </div>
        <button
          onClick={() => {
            if (status === true) return;
            setShowModal(true);
            setModalData({
              level: reserve.level,
              subject: reserve.subject,
              phone: reserve.phone_number,
            });
          }}
        >
          جزئیات بیشتر
        </button>
      </div>
    </div>
  );
}

export default ConsultantReservationsCard;
