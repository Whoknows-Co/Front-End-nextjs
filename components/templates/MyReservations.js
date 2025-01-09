import React, { useState } from "react";
import styles from "./MyReservations.module.css";
import ConsultantReservationsCard from "../module/ConsultantReservationsCard";
import Image from "next/image";
import cross from "../../public/reserveCard/cross.svg";
import { useGetConsultantReservedTimes } from "../../services/queries";
function MyReservations() {
  const [modalData, setModalData] = useState({
    level: "",
    subject: "",
    phone: "",
  });
  const [showModal, setShowModal] = useState(false);
  const { data, isPending } = useGetConsultantReservedTimes();
  if (isPending) return <p>loading</p>;
  console.log(data);
  console.log(data.reservation);

  return (
    <div className={styles.container}>
      {showModal && (
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
            <p>{modalData.level}</p>
            <p>{modalData.subject}</p>
            <p>حضوری</p>
            <p>{modalData.phone}</p>
          </div>
        </div>
      )}
      {data.data.reservation.map((reserve, index) => (
        <ConsultantReservationsCard
          key={index}
          reserve={reserve}
          status={reserve.status}
          setModalData={setModalData}
          setShowModal={setShowModal}
        />
      ))}
    </div>
  );
}

export default MyReservations;
