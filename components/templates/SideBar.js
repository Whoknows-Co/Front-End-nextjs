import React from "react";
import styles from "./SideBar.module.css";
import ButtonSB from "../atom/ButtonSB";
import profileIcon from "../../public/icons/profile-icon.svg";
import personOrange from "../../public/icons/personOrange.svg";
import editPersonBlue from "../../public/icons/editPersonBlue.svg";
import calenderBlue from "../../public/icons/calenderBlue.svg";
import EducatoinBlue from "../../public/icons/EducatoinBlue.svg";
import exit from "../../public/icons/exit-icon.svg";

import Image from "next/image";
function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src={profileIcon} alt="" />
        <div>
          <p>پرنیان خالقی</p>
          <p>09179589395</p>
        </div>
      </div>
      <div className={styles.navBar}>
        <ButtonSB
          txt={"حساب کاربری"}
          imgUrl={personOrange}
          bColor={"rgba(251, 133, 0, 0.21)"}
        ></ButtonSB>

        <ButtonSB
          txt={"ویرایش اطلاعات حساب"}
          imgUrl={editPersonBlue}
          bColor={"#F4F2EA"}
        ></ButtonSB>

        <ButtonSB
          txt={"نوبت های من"}
          imgUrl={calenderBlue}
          bColor={"#F4F2EA"}
        ></ButtonSB>

        <ButtonSB
          txt={"مشاوران من"}
          imgUrl={EducatoinBlue}
          bColor={"#F4F2EA"}
        ></ButtonSB>

        <ButtonSB
          txt={"خروج از حساب"}
          imgUrl={exit}
          bColor={"#F4F2EA"}
        ></ButtonSB>
      </div>
      <div className={styles.footer}>
        <div className={styles.bBack}></div>
        <div className={styles.oBack}></div>
        <p>موجودی کیف پول</p>
        <span> 0 تومان</span>
        <button>افزایش موجودی</button>
      </div>
    </div>
  );
}

export default SideBar;
