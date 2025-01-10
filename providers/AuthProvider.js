import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useGetConsultantProfile } from "../services/queries";
import { toast } from "react-toastify";

function AuthProvider({ children }) {
  const router = useRouter();
  const { data, isPending } = useGetConsultantProfile();

  useEffect(() => {
    if (!isPending && !data?.data) {
      router.push("/");
      toast.error("ابتدا وارد حساب خود شوید");
    }
  }, [isPending]);

  if (isPending) return <p>Loading...</p>;
  return children;
}

export default AuthProvider;
