import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false); 

  const fetchData = async (url) => {
    setLoading(true); 
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]); 

  return { data, error, loading }; 
};

export default useFetch;
