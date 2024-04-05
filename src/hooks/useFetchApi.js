import { useState, useEffect } from "react";

export function useFetchApi(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const isLoading = data === null && error === null;

  useEffect(() => {
    console.log("Fetching data");

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    }

    setTimeout(fetchData, 1000);
  }, [url]);

  return {
    data,
    error,
    isLoading,
  };
}
