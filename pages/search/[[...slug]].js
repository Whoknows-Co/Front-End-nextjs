import React from "react";
import SearchPage from "../../components/templates/SearchPage";
import { useRouter } from "next/router";

function search() {
  // const router = useRouter();
  // console.log(router.query.slug);
  return <SearchPage></SearchPage>;
}

export default search;
