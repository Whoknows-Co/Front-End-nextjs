import styled from "@emotion/styled";
import React from "react";
import styles from "./HomeFeatures.module.css";
import Image from "next/image";
import i1 from "../../public/home/i1.png";
import i2 from "../../public/home/i2.png";
import i3 from "../../public/home/i3.png";
import i4 from "../../public/home/i4.png";
import { useRouter } from "next/navigation";

function HomeFeatures() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div onClick={() => router.push("/consult")} className={styles.click}>
        <Image
          src={i1}
          width={312}
          height={200}
          alt="image"
          className={styles.image}
        />
        <p>نوبت دهی مشاوره</p>
      </div>
      <div>
        <Image
          src={i2}
          width={312}
          height={200}
          alt="image"
          className={styles.image}
        />
        <p>مشاوره درسی آنلاین (به زودی)</p>
      </div>
      <div onClick={() => router.push("/consult")} className={styles.click}>
        <Image
          src={i3}
          width={312}
          height={200}
          alt="image"
          className={styles.image}
        />
        <p>مشاوران</p>
      </div>
      <div>
        <Image
          src={i4}
          width={312}
          height={200}
          alt="image"
          className={styles.image}
        />
        <p>آموزشگاها (به زودی)</p>
      </div>
    </div>
  );
}

export default HomeFeatures;
