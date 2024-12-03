import React from "react";
import styles from "./SearchBar.module.css";
import banner from "../public/Pattern.svg";
import Image from "next/image";
import search from "../public/icons/search.svg";
function SearchBar() {
  return (
    <div className={styles.container}>
      <Image
        width={800}
        height={600}
        className={styles.bg}
        src={banner}
        alt="banner"
      />
      <div className={styles.search}>
        <Image width={30} height={30} src={search} alt="search" />
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
