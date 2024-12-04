import React from "react";
import FilterSidebar from "../module/FilterSidebar";
import SearchResaultCard from "../module/SearchResaultCard";
import styles from "./SearchPage.module.css";
function SearchPage() {
  return (
    <div className={styles.container}>
      <FilterSidebar>SearchPage</FilterSidebar>
      <div className={styles.Cards}>
        <SearchResaultCard></SearchResaultCard>
        <SearchResaultCard></SearchResaultCard>
        <SearchResaultCard></SearchResaultCard>
        <SearchResaultCard></SearchResaultCard>
      </div>
    </div>
  );
}

export default SearchPage;
