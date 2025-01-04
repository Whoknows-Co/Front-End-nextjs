import React from "react";
import styles from "./SearchResaultCard.module.css";

import profileIcon from "../../public/icons/profile-icon.svg";
import start from "../../public/icons/blueStarRate.svg";

import Image from "next/image";
import LocationBox from "../mulecules/LocationBox";
import { useRouter } from "next/router";
function SearchResaultCard({ moshaver }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image width={100} height={100} src={profileIcon} alt="icon" />
        <div className={styles.title}>
          <h2>
            {moshaver.first_name} {moshaver.last_name}
          </h2>
          <div className={styles.rate}>
            <Image width={25} height={25} src={start} alt="icon" />{" "}
            <Image width={25} height={25} src={start} alt="icon" />{" "}
            <Image width={25} height={25} src={start} alt="icon" />{" "}
            <Image width={25} height={25} src={start} alt="icon" />
          </div>
        </div>
        <p>250 نوبت رایگان</p>
      </div>
      <div className={styles.content}>
        <p>{moshaver.description}</p>
      </div>
      <div className={styles.footer}>
        <LocationBox address={moshaver.address} />
        <button onClick={() => router.push(`/consult/${moshaver.moshaver_id}`)}>
          دریافت نوبت
        </button>
      </div>
    </div>
  );
}

export default SearchResaultCard;
