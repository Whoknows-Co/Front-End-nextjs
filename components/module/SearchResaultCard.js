import React from "react";
import styles from "./SearchResaultCard.module.css";

import profileIcon from "../../public/icons/profile-icon.svg";
import start from "../../public/icons/blueStarRate.svg";

import Image from "next/image";
import LocationBox from "../mulecules/LocationBox";
function SearchResaultCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image width={100} height={100} src={profileIcon} />
        <div className={styles.title}>
          <h2>بهراد روشنراد</h2>
          <div className={styles.rate}>
            <Image width={25} height={25} src={start} />{" "}
            <Image width={25} height={25} src={start} />{" "}
            <Image width={25} height={25} src={start} />{" "}
            <Image width={25} height={25} src={start} />
          </div>
        </div>
        <p>250 نوبت رایگان</p>
      </div>
      <div className={styles.content}>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است
        </p>
      </div>
      <div className={styles.footer}>
        <LocationBox />
        <button>دریافت نوبت</button>
      </div>
    </div>
  );
}

export default SearchResaultCard;
