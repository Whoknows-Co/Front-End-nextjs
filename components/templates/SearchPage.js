import React from "react";
import FilterSidebar from "../module/FilterSidebar";
import SearchResaultCard from "../module/SearchResaultCard";
import styles from "./SearchPage.module.css";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ColorRing } from "react-loader-spinner";
function SearchPage() {
  const router = useRouter();

  const fetchData = async () => {
    const res = await fetch("https://mentoroo.liara.run/api/profilesNew");
    const data = await res.json();
    return data;
  };
  const { isLoading, data } = useQuery({
    queryKey: ["profilesNew"],
    queryFn: fetchData,
  });
  const slug = router.query.slug && router.query.slug[0];
  if (!slug) {
    if (typeof window !== "undefined") {
      router.push("/");
    }
    return null; // برای جلوگیری از رندر در سمت سرور
  }
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
