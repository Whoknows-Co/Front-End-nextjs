import React from "react";
import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={styles.container}>
      <img className={styles.bg} src="../../public/Pattern.svg" alt="" />
      <div className={styles.search}>
        <img src="../../public/icons/search.svg" alt="" />
        <input
          type="text"
          name="search"
          placeholder="نام مشاور،آموزشگاه یا..."
        />
      </div>
      <div className={styles.ratings}>
        <div>
          <p>
            <span>۴۴۴+</span>hello
          </p>
        </div>
        <div>
          <p>
            <span>۴۴۴+</span>hello
          </p>
        </div>
        <div>
          <p>
            <span>۴۴۴+</span>hello
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
