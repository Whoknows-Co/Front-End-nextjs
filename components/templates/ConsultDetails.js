import { useEffect, useRef, useState } from "react";
import DateProvider from "../../providers/DateProvider";
import BestStudentList from "../module/BestStudentList";
import ConsultInfoCard from "../module/ConsultInfoCard";
import ReservationCard from "../module/ReservationCard";
import styles from "./ConsultDetails.module.css";
import ReservationBox from "./ReservationBox";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import findConsult from "../../utils/findConsult";

function ConsultDetails() {
  const myRef = useRef(null);
  const router = useRouter();
  const id = router.query.consultId;
  const [consult, setConsult] = useState([]);

  const executeScroll = () => myRef.current.scrollIntoView(); //to scroll down to

  const fetchData = async () => {
    const res = await fetch("https://mentoroo.liara.run/api/profilesNew");
    const data = await res.json();
    return data;
  };
  const { isPending, data } = useQuery({
    queryKey: ["profilesNew"],
    queryFn: fetchData,
  });
  console.log(data);
  console.log(isPending);
  if (isPending) return "loading";

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <ConsultInfoCard moshaver={findConsult(data, id)[0]} />
        <ReservationCard
          moshaver={findConsult(data, id)[0]}
          executeScroll={executeScroll}
        />
      </div>
      <BestStudentList moshaver={findConsult(data, id)[0]} />
      <div ref={myRef} className={styles.reserve}>
        <DateProvider>
          <ReservationBox id={id} moshaver={findConsult(data, id)[0]} />
        </DateProvider>
      </div>
    </div>
  );
}

export default ConsultDetails;
