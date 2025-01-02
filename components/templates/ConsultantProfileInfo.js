import styles from "./ConsultantProfileInfo.module.css";
import { useGetConsultantProfile } from "../../services/queries";
function ConsultantProfileInfo({ data, setSelected }) {
  console.log(data);

  return (
    <div className={styles.container}>
      <form className={styles.info}>
        <div className={styles.header}>
          <p>اطلاعات حساب کاربری</p>
          <button onClick={() => setSelected(2)}>ویرایش اطلاعات</button>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.top}>
            <div className={styles.right}>
              <div>
                <label>نام</label>
                <div className={styles.fields}>
                  <p>{data.data.first_name}</p>
                </div>
              </div>
              <div>
                <label>نام خانوادگی</label>
                <div className={styles.fields}>
                  <p>{data.data.last_name}</p>
                </div>
              </div>
              <div>
                <label>آدرس ایمیل</label>
                <div className={styles.fields}>
                  <p>{data.data.email}</p>
                </div>
              </div>
              <div>
                <label>شماره تماس</label>
                <div className={styles.fields}>
                  <p>{data.data.display_phone}</p>
                </div>
              </div>
              <div>
                <label>رشته</label>
                <div className={styles.fields}>
                  <p>{data.data.specialty}</p>
                </div>
              </div>
              <div>
                <label>شهر</label>
                <div className={styles.fields}>
                  <p>{data.data.city}</p>
                </div>
              </div>
              <div>
                <label>آدرس</label>
                <div className={styles.fields}>
                  <p>{data.data.address}</p>
                </div>
              </div>
            </div>
            <div className={styles.left}>
              <label>درباره ی مشاور</label>
              <div className={styles.fieldsText}>
                <p>{data.data.about}</p>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div>
              <label>راه های ارتباطی</label>
              <div className={styles.fields}>
                <p></p>
              </div>
            </div>
            <div>
              <label>خدمات</label>
              <div className={styles.fields}>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ConsultantProfileInfo;
