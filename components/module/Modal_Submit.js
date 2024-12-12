import React from "react";
import styles from "./Modal_Submit.module.css";
import Image from "next/image";
import success from "../../public/icons/success.svg";
import cross from "../../public/icons/cross.svg";
import { useRouter } from "next/router";

function Modal_Submit({ setShowModal }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Image
        src={cross}
        width={30}
        height={30}
        alt="cross"
        className={styles.cross}
        onClick={() => setShowModal(false)}
      />
      <div className={styles.modal}>
        <div className={styles.textBox}>
          <Image
            className={styles.success}
            src={success}
            width={20}
            height={20}
            alt="seccess"
          />
          <p>رزرو با موقیت انجام شد</p>
        </div>
        <button onClick={() => router.push("/")}>بازگشت به صفحه اصلی</button>
      </div>
    </div>
  );
}

export default Modal_Submit;
