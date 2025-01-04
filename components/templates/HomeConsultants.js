import React from "react";
import styles from "./HomeConsultants.module.css";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import profileIcon from "../../public/icons/profile-icon.svg";
import { useRouter } from "next/navigation";
function HomeConsultants() {
  const router = useRouter();
  const fetchData = async () => {
    const res = await fetch("https://mentoroo.liara.run/api/profilesNew");
    const data = await res.json();
    return data;
  };
  const { isPending, data } = useQuery({
    queryKey: ["profilesNew"],
    queryFn: fetchData,
  });
  console.log(data);
  if (isPending) return "loading";
  if (!data) return "Somthing Went Wrong";
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>مشاوران ما</p>
      </div>
      <div className={styles.list}>
        {data.map((moshaver, index) => {
          if (index <= 4)
            return (
              <div
                className={styles.card}
                onClick={() => router.push(`/consult/${moshaver.moshaver_id}`)}
              >
                <Image src={profileIcon} alt="icon" />
                <p>
                  {moshaver.first_name} {moshaver.last_name}
                </p>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default HomeConsultants;
