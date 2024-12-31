import React from "react";
import styles from "./RegisterPage.module.css";
import { useForm } from "react-hook-form";
import { useRegister } from "../../services/mutations";
import { useRouter } from "next/navigation";
function RegisterPage() {
  const submitHandler = (e) => {};
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
      },
      onError: (err) => {
        console.log(err);
      },
    });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
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
          <label>مبایل</label>
          <input
            {...register("phone_number", {
              required: { value: true, message: "شماره تماس خود را وارد کنید" },
              minLength: { value: 11, message: "شماره تماس نا معتبر است" },
              maxLength: { value: 11, message: "شماره تماس نا معتبر است" },
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterPage;
