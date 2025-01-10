import React from "react";
import styles from "./ConsultInfoCard.module.css";

import tripleBulet from "../../public/icons/tirpleBullet.svg";
import profileIcon from "../../public/icons/profile-icon.svg";

import pinIcon from "../../public/icons/pin-icon.svg";
import email from "../../public/icons/email.svg";
import trust from "../../public/icons/trust.svg";
import Location from "../../public/icons/Location.svg";
import Location2 from "../../public/icons/Location2.svg";

import instagram from "../../public/icons/instagram-icon.svg";
import phone from "../../public/icons/phone-icon.svg";
import linkedin from "../../public/icons/linkedIn-icon.svg";
import Image from "next/image";
function ConsultInfoCard({ moshaver }) {
  return (
    <div className={styles.container}>
      <Image className={styles.bullets} src={tripleBulet} alt="" />
      <div className={styles.header}>
        <Image src={profileIcon} alt="" />
        <div className={styles.details}>
          <h2>{moshaver.first_name || ""}</h2>
          <h3>{moshaver.last_name || ""}</h3>
          <div>
            <Image width={30} height={30} src={Location} alt="" />
            <p>شیراز</p>
          </div>
          <div>
            <Image width={30} height={30} src={trust} alt="" />
            <p>{moshaver.institute_name}</p>
          </div>
          <div>
            <Image width={30} height={30} src={email} alt="" />
            <p>{moshaver.email}</p>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.top}>
          <Image width={30} height={30} src={pinIcon} alt="" />
          <h4>{moshaver.about}</h4>
        </div>
        <div className={styles.bottom}>
          <div>
            <Image width={30} height={30} src={Location2} alt="" />
            <h3>آدرس:</h3>
          </div>
          <p>{moshaver.address}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <h3>راه های ارتباطی</h3>
        <div>
          <Image src={instagram} alt="icon" />
          <Image src={linkedin} alt="icon" />
          <Image src={phone} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default ConsultInfoCard;
