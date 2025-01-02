"use client";
import React from "react";
import styles from "./ConsultantProfileInfo.module.css";
import { useGetConsultantProfile } from "../../services/queries";
export default function ConsultantProfileInfo({ data }) {
  console.log(data);

  return (
    <div>
      <p>{data?.data?.id}</p>
      <p>{data?.data?.email}</p>
      <p>{data?.data?.first_name}</p>
      <p>{data?.data?.last_name}</p>
      <p>{data?.data?.phone_number}</p>
    </div>
  );
}
