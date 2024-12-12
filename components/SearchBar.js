import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import banner from "../public/Pattern.svg";
import Image from "next/image";
import search from "../public/icons/search.svg";
import { useRouter } from "next/router";
import searchResaultCreator from "../utils/searchResaultCreator";
import { useQuery } from "@tanstack/react-query";
function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [filterResault, setFilterResault] = useState("");
  const router = useRouter();
  console.log(searchValue);
  const fetchData = async () => {
    const res = await fetch("https://mentoroo.liara.run/api/moshavers");
    const data = await res.json();
    return data;
  };
  const { data } = useQuery({
    queryKey: ["moshavers"],
    queryFn: fetchData,
  });
  const searchFilter = () => {
    console.log(data);
    console.log(searchValue);
    const resault = searchResaultCreator(searchValue, data);
    console.log(resault);
    router.push(`search/${resault}`);
  };
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
        <Image
          width={30}
          height={30}
          src={search}
          alt="search"
          onClick={searchFilter}
        />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
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
