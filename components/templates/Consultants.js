import React from "react";
import FilterSidebar from "../module/FilterSidebar";
import SearchResaultCard from "../module/SearchResaultCard";
import styles from "./Consultants.module.css";
import { useQuery } from "@tanstack/react-query";
function Consultents() {
  const fetchData = async () => {
    const res = await fetch("https://mentoroo.liara.run/api/moshavers");
    const data = await res.json();
    return data;
  };
  const { isLoading, data } = useQuery({
    queryKey: ["moshavers"],
    queryFn: fetchData,
  });
  console.log(data, isLoading);
  if (isLoading) return "loading";
  return (
    <div className={styles.container}>
      <FilterSidebar>Consultents</FilterSidebar>
      <div className={styles.Cards}>
        {data.map((moshaver, index) => (
          <SearchResaultCard key={index} moshaver={moshaver} id={index} />
        ))}
      </div>
    </div>
  );
}

export default Consultents;
