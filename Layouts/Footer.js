import styles from "./Footer.module.css";
import cities from "../constants/cities";
import Image from "next/image";
import logo from "../public/logo.svg";
function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.status}>
          <h3>شهر های منتورو</h3>
          {cities.map((city, index) => (
            <p key={index}>{city.name}</p>
          ))}
        </div>
        <div>
          <h3>درباره منتورو</h3>
          <p>مشاوره تحصیلی آنلاین</p>
          <p>درباره‌ی ما</p>
          <p>سوالات متداول</p>
          <p>ثبت‌نام مشاوران</p>
          <p>قوانین و مقررات</p>
          <p>قوانین ثبت نظر</p>
          <p>تماس با ما</p>
        </div>
        <div className={styles.contactUs}>
          <h3>با ما در ارتباط باشید</h3>
          <p>mentoro.ac@gmail.com</p>
          <Image width={100} height={100} src={logo} alt="icon" />
        </div>
        <div>
          <h3>منتورو را در شبکه های اجتماعی دنبال کنید</h3>
        </div>
      </div>
      <div className={styles.describtion}>
        <p>
          <span>منتورو: </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
          باشد،
        </p>
      </div>
      <div className={styles.rule}>
        <p>کلیه حقوق این سایت متعلق به شرکت WhoKnows می‌باشد.</p>
      </div>
    </>
  );
}

export default Footer;
