import React from "react";
import StudentInfoCard from "../module/StudentInfoCard";
import styles from "./StudentViewSection.module.css";
function StudentViewSection() {
  return (
    <div className={styles.container}>
      <StudentInfoCard />
    </div>
  );
}

export default StudentViewSection;
