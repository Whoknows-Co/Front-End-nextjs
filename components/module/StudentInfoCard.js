import React from "react";
import styles from "./StudentInfoCard.module.css";
function StudentInfoCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>اطلاعات حساب کاربری</h2>
        <button>ویرایش اطلاعات</button>
      </div>
      <hr />
      <div className={styles.content}></div>
    </div>
  );
}

export default StudentInfoCard;
