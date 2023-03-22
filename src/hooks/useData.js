import { useEffect, useState } from "react";

const useData = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://niche-website-server-side-zizx.onrender.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, [cars]);
  return {
    cars,
    loading,
  };
};
export default useData;
