import React from "react";
import FilterSidebar from "../module/FilterSidebar";
import SearchResaultCard from "../module/SearchResaultCard";
import styles from "./Consultants.module.css";
import { useQuery } from "@tanstack/react-query";
import { ColorRing } from "react-loader-spinner";
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
  if (isLoading)
    return (
      <div className={styles.loader}>
        <ColorRing
          visible={true}
          height="180"
          width="180"
          colors={[
            "#208cb0",
            "#f9b025",
            "#ed6624",
            "#208cb0",
            "#f9b025",
            "#ed6624",
          ]}
        />
      </div>
    );
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
