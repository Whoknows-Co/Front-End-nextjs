import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import HomeFeatures from "../components/templates/HomeFeatures";
import HomeConsultants from "../components/templates/HomeConsultants";

export default function Home() {
  return (
    <>
      <SearchBar />
      <HomeFeatures />
      <HomeConsultants />
    </>
  );
}
