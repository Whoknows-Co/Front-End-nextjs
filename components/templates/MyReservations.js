import React, { useState } from "react";
import styles from "./MyReservations.module.css";
import ConsultantReservationsCard from "../module/ConsultantReservationsCard";
import Image from "next/image";
import cross from "../../public/reserveCard/cross.svg";
function MyReservations() {
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <Image
          src={cross}
          width={36}
          height={36}
          alt="cross"
          className={styles.cross}
          onClick={() => setShowModal(false)}
        />
        <div className={styles.label}>
          <p>پایه:</p>
          <p>رشته:</p>
          <p>نوع مشاوره:</p>
          <p>شماره تماس:</p>
        </div>
        <div className={styles.answer}>
          <p>یازدهم</p>
          <p>ریاضی-فیزیک</p>
          <p>حضوری</p>
          <p>09179589399</p>
        </div>
      </div>
      <ConsultantReservationsCard status={false} setModalData={setModalData} />
      <ConsultantReservationsCard status={true} setModalData={setModalData} />
    </div>
  );
}

export default MyReservations;
