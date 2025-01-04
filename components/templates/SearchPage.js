import React from "react";
import FilterSidebar from "../module/FilterSidebar";
import SearchResaultCard from "../module/SearchResaultCard";
import styles from "./SearchPage.module.css";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
function SearchPage() {
  const router = useRouter();
  const slug = router.query.slug["0"];

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
  if (!data) return "Something Went Wrong";
  return (
    <div className={styles.container}>
      <FilterSidebar>SearchPage</FilterSidebar>
      <div className={styles.Cards}>
        {data.map((moshaver, index) => {
          if (slug.includes(index))
            return (
              <SearchResaultCard
                key={moshaver.moshaver_id}
                moshaver={moshaver}
              />
            );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
