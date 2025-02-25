import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import banner from "../public/Pattern.svg";
import Image from "next/image";
import search from "../public/icons/search.svg";
import { useRouter } from "next/router";
import searchResaultCreator from "../utils/searchResaultCreator";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [filterResault, setFilterResault] = useState("");
  const router = useRouter();
  console.log(searchValue);
  const fetchData = async () => {
    const res = await fetch("https://mentoroo.liara.run/api/profilesNew");
    const data = await res.json();
    return data;
  };
  const { data } = useQuery({
    queryKey: ["profilesNew"],
    queryFn: fetchData,
  });
  const searchFilter = () => {
    console.log(data);
    console.log(searchValue);
    const resault = searchResaultCreator(searchValue, data);
    if (!resault) {
      toast.error("نتیجه ای یافت نشد");
      return;
    }
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
          width={54.375}
          height={50}
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
            <span>۲۰۰+</span>مشاور
          </p>
        </div>
        <div>
          <p>
            <span>۲۰۰۰+</span>دانش آموز
          </p>
        </div>
        <div>
          <p>
            <span>۱۰۰+</span>آموزشگاه
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
