import React from "react";
import FilterSidebar from "../module/FilterSidebar";
import SearchResaultCard from "../module/SearchResaultCard";
import styles from "./Consultants.module.css";
import { useQuery } from "@tanstack/react-query";
function Consultents() {
  const fetchData = async () => {
    const res = await fetch("https://mentoroo.liara.run/api/profilesNew");
    const data = await res.json();
    return data;
  };
  const { isLoading, data } = useQuery({
    queryKey: ["profilesNew"],
    queryFn: fetchData,
  });
  console.log(data, isLoading);
  if (isLoading) return "loading";
  if (!data) return "Somthing Went Wrong";
  return (
    <div className={styles.container}>
      <FilterSidebar>Consultents</FilterSidebar>
      <div className={styles.Cards}>
        {data.map((moshaver) => (
          <SearchResaultCard key={moshaver.moshaver_id} moshaver={moshaver} />
        ))}
      </div>
    </div>
  );
}

export default Consultents;
