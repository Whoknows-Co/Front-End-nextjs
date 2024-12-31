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
        <Image src={profileIcon} alt="profile" width={111} height={111} />
        <div>
          <p>پرنیان خالقی</p>
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
          bColor={"#FFF6E8"}
        ></ButtonSB>

        <ButtonSB
          txt={"مدیریت نوبت ها"}
          imgUrl={calenderBlue}
          bColor={"#FFF6E8"}
        ></ButtonSB>

        <ButtonSB
          txt={"مشاهده رزرو های من"}
          imgUrl={EducatoinBlue}
          bColor={"#FFF6E8"}
        ></ButtonSB>

        <ButtonSB
          txt={"خروج از حساب"}
          imgUrl={exit}
          bColor={"#FFF6E8"}
        ></ButtonSB>
      </div>
    </div>
  );
}

export default SideBar;
