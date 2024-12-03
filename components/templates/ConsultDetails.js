import DateProvider from "../../providers/DateProvider";
import BestStudentList from "../module/BestStudentList";
import ConsultInfoCard from "../module/ConsultInfoCard";
import ReservationCard from "../module/ReservationCard";
import styles from "./ConsultDetails.module.css";
import ReservationBox from "./ReservationBox";

function ConsultDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <ConsultInfoCard />
        <ReservationCard />
      </div>
      <BestStudentList />
      <div className={styles.reserve}>
        <DateProvider>
          <ReservationBox />
        </DateProvider>
      </div>
    </div>
  );
}

export default ConsultDetails;
