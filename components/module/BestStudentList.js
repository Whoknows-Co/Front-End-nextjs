import React from "react";
import styles from "./BestStudentList.module.css";
import students from "../../constants/student";
import profileIcon from "../../public/icons/profile-icon.svg";
import star from "../../public/icons/star-rating.svg";
import Image from "next/image";

function BestStudentList() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <h1>رتبه های برتر تحت مشاوره</h1>
      <div className={styles.list}>
        {students.map((student, index) => (
          <div key={index} className={styles.student}>
            <Image src={profileIcon} alt="" />
            <div className={styles.rating}>
              <Image src={star} alt="" />
              <h3>رتبه {student.rating}</h3>
            </div>
            <p>{student.name}</p>
            <p>{student.konkur}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestStudentList;
