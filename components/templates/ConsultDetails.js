import BestStudentList from "../module/BestStudentList";
import ConsultInfoCard from "../module/ConsultInfoCard";
import ReservationCard from "../module/ReservationCard";
import styles from "./ConsultDetails.module.css";

function ConsultDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <ConsultInfoCard />
        <ReservationCard />
      </div>
      <BestStudentList />
    </div>
  );
}

export default ConsultDetails;
