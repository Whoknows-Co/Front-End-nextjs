import React from "react";
import styles from "./EditConsultantProfile.module.css";
import { useForm } from "react-hook-form";
import { useUpdateConsultantProfile } from "../../services/mutations";
import Image from "next/image";
import pencil from "../../public/setTimes/pencil.svg";
import { toast } from "react-toastify";

function EditConsultantProfile({ data, setSelected }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, isPending } = useUpdateConsultantProfile();
  const submitHandler = (data) => {
    if (isPending) return;
    mutate(data, {
      onSuccess: (data) => {
        toast.success("اطلاعات شما با موفقیت ثبت شد");
        window.location.reload();
        console.log(data);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };
  const cancelHandler = () => {
    setSelected(1);
    window.location.reload();
  };
  return (
    <div className={styles.container}>
      <form className={styles.info} onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.header}>
          <Image src={pencil} width={22} height={22} alt="pencil" />
          <p>ویرایش اطلاعات</p>
        </div>
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
                <input
                  placeholder={data.display_phone || 0}
                  {...register("display_phone")}
                />
              </div>
              <div>
                <label>رشته</label>
                <input
                  placeholder={data.specialty || ""}
                  {...register("specialty")}
                />
              </div>
              <div>
                <label>شهر</label>
                <input placeholder={data.city || ""} {...register("city")} />
              </div>
              <div>
                <label>آدرس</label>
                <input
                  placeholder={data.address || ""}
                  {...register("address")}
                />
              </div>
            </div>
            <div className={styles.left}>
              <label>درباره ی مشاور</label>
              <textarea placeholder={data.about || ""} {...register("about")} />
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
              <input placeholder={data.services || ""} />
              <button>+</button>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button1} onClick={cancelHandler}>
            انصراف
          </button>
          <button className={styles.button2} type="submit">
            دخیره اطلاعات
          </button>
        </div>
      </form>
      <form className={styles.password}>
        <div className={styles.header}>
          <Image src={pencil} width={22} height={22} alt="pencil" />
          <p>ویرایش رمز عبور</p>
        </div>
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
