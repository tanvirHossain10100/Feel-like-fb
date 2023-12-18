import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);


  return [data];
};
