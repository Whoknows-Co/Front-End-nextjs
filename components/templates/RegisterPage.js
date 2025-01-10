import React from "react";
import styles from "./RegisterPage.module.css";
import { useForm } from "react-hook-form";
import { useRegister } from "../../services/mutations";
import { useRouter } from "next/navigation";
import banner from "../../public/MENTOROOObanner.png";
import logo from "../../public/register/logo.svg";
import Image from "next/image";
import { toast } from "react-toastify";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { mutate, isPending } = useRegister();
  const router = useRouter();

  function onSubmit(values) {
    if (isPending) return;

    mutate(values, {
      onSuccess: (data) => {
        console.log(data);
        router.push("/auth/login");
        toast.success("ثبت نام موفقیت آمیز بود . لطفا وارد شوید");
      },
      onError: (error) => {
        if (error.error === "The phone number has already been taken") {
          toast.error("شماره موبایل وارد شده قبلا استفاده شده است!");
        } else if (error.error === "The email has already been taken") {
          toast.error("ایمیل وارد شده قبلا استفاده شده است!");
        } else if (error.error === "The email has already been taken") {
          toast.error("ایمیل وارد شده قبلا استفاده شده است!");
        } else if (
          error.error ===
          "The password must contain at least one lowercase letter."
        ) {
          toast.error("رمز عبور باید شامل حروف کوچک باشد!");
        } else if (
          error.error ===
          "The password must contain at least one uppercase letter."
        ) {
          toast.error("رمز عبور باید شامل حروف بزرگ باشد!");
        } else if (
          error.error === "The password must be at least 8 characters long."
        ) {
          toast.error("رمز عبور باید حداقل شامل 8 کارکتر باشد!");
        }
        console.log(error);
      },
    });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <Image src={logo} width={82.5} height={110} alt="logo" />
          <h1>به منتورو خوش آمدید</h1>
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>نام</label>
            <input
              {...register("first_name", {
                required: { value: true, message: "نام خود را وارد کنید" },
              })}
            />
            {!!errors?.firstName && <span>{errors?.firstName?.message}</span>}
          </div>
          <div>
            <label>نام خانوادگی</label>
            <input
              {...register("last_name", {
                required: {
                  value: true,
                  message: "نام خانوادگی خود را وارد کنید",
                },
              })}
            />
            {!!errors?.lastName && <span>{errors?.lastName?.message}</span>}
          </div>
          <div>
            <label>ایمیل</label>
            <input
              {...register("email", {
                required: { value: true, message: "ایمیل خود را وارد کنید" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {!!errors?.email && <span>{errors?.email?.message}</span>}
          </div>
          <div>
            <label>موبایل</label>
            <input
              {...register("phone_number", {
                required: {
                  value: true,
                  message: "شماره تماس خود را وارد کنید",
                },
              })}
            />
            {!!errors?.phone && <span>{errors?.phone?.message}</span>}
          </div>
          <div>
            <label>رمز عبور</label>
            <input
              {...register("password", {
                required: { value: true, message: "رمز عبور خود را وارد کنید" },
              })}
            />
            {!!errors?.password && <span>{errors?.password?.message}</span>}
          </div>
          <div>
            <label>تکرار رمز عبور </label>
            <input
              {...register("password_confirmation", {
                required: {
                  value: true,
                  message: "تکرار رمز عبور خود را وارد کنید",
                },
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || "Passwords should match!";
                },
              })}
            />
            {!!errors?.confirmPassword && (
              <span>{errors?.confirmPassword?.message}</span>
            )}
          </div>
          <button type="submit">ثبت نام</button>
        </form>
        <p className={styles.switch}>
          آیا اکانت کاربری دارید؟{" "}
          <span onClick={() => router.push("/auth/login")}>ورود</span>
        </p>
      </div>
      <Image
        src={banner}
        width={1030}
        height={1041}
        alt="banner"
        className={styles.banner}
      />
    </div>
  );
}

export default RegisterPage;
