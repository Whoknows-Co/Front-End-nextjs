import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useGetConsultantProfile } from "../services/queries";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import styles from "./AuthProvider.module.css";
function AuthProvider({ children }) {
  const router = useRouter();
  const { data, isPending } = useGetConsultantProfile();

  useEffect(() => {
    if (!isPending && !data?.data) {
      router.push("/");
      toast.error("ابتدا وارد حساب خود شوید");
    }
  }, [isPending]);

  if (isPending)
    return (
      <div className={styles.loader}>
        <ColorRing
          visible={true}
          height="180"
          width="180"
          colors={[
            "#208cb0",
            "#f9b025",
            "#ed6624",
            "#208cb0",
            "#f9b025",
            "#ed6624",
          ]}
        />
      </div>
    );
  return children;
}

export default AuthProvider;
