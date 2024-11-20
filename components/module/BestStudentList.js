import React from "react";
import styles from "./BestStudentList.module.css";
import students from "../../constants/student";
function BestStudentList() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <h1>رتبه های برتر تحت مشاوره</h1>
      <div className={styles.list}>
        {students.map((student) => (
          <div className={styles.student}>
            <img src="../../../public/icons/profile-icon.svg" alt="" />
            <div className={styles.rating}>
              <img src="../../../public/icons/star-rating.svg" alt="" />
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
