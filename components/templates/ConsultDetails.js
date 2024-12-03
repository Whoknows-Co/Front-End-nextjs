import { useRef } from "react";
import DateProvider from "../../providers/DateProvider";
import BestStudentList from "../module/BestStudentList";
import ConsultInfoCard from "../module/ConsultInfoCard";
import ReservationCard from "../module/ReservationCard";
import styles from "./ConsultDetails.module.css";
import ReservationBox from "./ReservationBox";

function ConsultDetails() {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView(); //to scroll down to
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <ConsultInfoCard />
        <ReservationCard executeScroll={executeScroll} />
      </div>
      <BestStudentList />
      <div ref={myRef} className={styles.reserve}>
        <DateProvider>
          <ReservationBox />
        </DateProvider>
      </div>
    </div>
  );
}

export default ConsultDetails;
