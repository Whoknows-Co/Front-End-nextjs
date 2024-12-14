import { useEffect, useRef, useState } from "react";
import DateProvider from "../../providers/DateProvider";
import BestStudentList from "../module/BestStudentList";
import ConsultInfoCard from "../module/ConsultInfoCard";
import ReservationCard from "../module/ReservationCard";
import styles from "./ConsultDetails.module.css";
import ReservationBox from "./ReservationBox";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

function ConsultDetails() {
  const myRef = useRef(null);
  const router = useRouter();
  const id = router.query.consultId;

  const executeScroll = () => myRef.current.scrollIntoView(); //to scroll down to

  const fetchData = async () => {
    const res = await fetch("https://mentoroo.liara.run/api/moshavers");
    const data = await res.json();
    return data;
  };
  const { isLoading, data } = useQuery({
    queryKey: ["moshavers"],
    queryFn: fetchData,
  });
  console.log(isLoading);
  if (isLoading) return "loading";
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <ConsultInfoCard moshaver={data[id]} />
        <ReservationCard moshaver={data[id]} executeScroll={executeScroll} />
      </div>
      <BestStudentList moshaver={data[id]} />
      <div ref={myRef} className={styles.reserve}>
        <DateProvider>
          <ReservationBox id={id} moshaver={data[id]} />
        </DateProvider>
      </div>
    </div>
  );
}

export default ConsultDetails;
