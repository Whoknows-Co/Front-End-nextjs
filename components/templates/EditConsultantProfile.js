import React from "react";
import styles from "./EditConsultantProfile.module.css";
function EditConsultantProfile({ data }) {
  return (
    <div className={styles.container}>
      <form className={styles.info}>
        <p>ویرایش اطلاعات</p>
        <div className={styles.infoContainer}>
          <div className={styles.top}>
            <div className={styles.right}>
              <div>
                <label>نام</label>
                <input placeholder={data.first_name || ""} />
              </div>
              <div>
                <label>نام خانوادگی</label>
                <input placeholder={data.last_name || ""} />
              </div>
              <div>
                <label>آدرس ایمیل</label>
                <input placeholder={data.email || ""} />
              </div>
              <div>
                <label>شماره تماس</label>
                <input placeholder={data.profile.display_phone || ""} />
              </div>
              <div>
                <label>رشته</label>
                <input placeholder={data.profile.specialty || ""} />
              </div>
              <div>
                <label>شهر</label>
                <input placeholder={data.profile.city || ""} />
              </div>
              <div>
                <label>آدرس</label>
                <input placeholder={data.profile.address || ""} />
              </div>
            </div>
            <div className={styles.left}>
              <label>درباره ی مشاور</label>
              <textarea placeholder={data.profile.about || ""} />
            </div>
          </div>
          <div className={styles.bottom}>
            <div>
              <label>راه های ارتباطی</label>
              <input placeholder="" />
              <input placeholder="" />
              <input placeholder="" />
              <input placeholder="" />
            </div>
            <div>
              <label>خدمات</label>
              <input placeholder={data.profile.services || ""} />
              <button>+</button>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button1}>انصراف</button>
          <button className={styles.button2}>دخیره اطلاعات</button>
        </div>
      </form>
      <form className={styles.password}>
        <p>ویرایش رمز عبور</p>
        <div className={styles.passwordContainer}>
          <div>
            <label>رمز عبور جدید</label>
            <input placeholder="" />
          </div>
          <div>
            <label>تکرار رمز عبور</label>
            <input placeholder="" />
          </div>
          <div>
            <label>رمز عبور قدیمی</label>
            <input placeholder="" />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button1}>انصراف</button>
          <button className={styles.button2}>دخیره اطلاعات</button>
        </div>
      </form>
    </div>
  );
}

export default EditConsultantProfile;
