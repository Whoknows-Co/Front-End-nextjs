import React from "react";
import styles from "./BestStudentList.module.css";
import students from "../../constants/student";
import profileIcon from "../../public/icons/profile-icon.svg";
import star from "../../public/icons/star-rating.svg";
import Image from "next/image";

function BestStudentList({ moshaver }) {
  const students = moshaver.best_students || [];
  return (
    <div className={styles.container}>
      <h1>رتبه های برتر تحت مشاوره</h1>
      {students.length === 0 ? (
        <h2 className={styles.notFound}>مشاور هنوز رتبه برتری ثبت نکرده است</h2>
      ) : (
        <div className={styles.list}>
          {students.map((student, index) => (
            <div key={index} className={styles.student}>
              <Image src={profileIcon} alt="icon" />
              <div className={styles.rating}>
                <Image src={star} alt="icon" />
                <h3>رتبه {student.rating}</h3>
              </div>
              <p>{student.name}</p>
              <p>{student.konkur}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BestStudentList;
