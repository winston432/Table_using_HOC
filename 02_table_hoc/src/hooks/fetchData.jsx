// src/hooks/fetchData.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchData = (url, delay = 3000) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const titles = response.data.map(post => post.title);
        // Wait for the specified delay before setting the data
        await new Promise(resolve => setTimeout(resolve, delay));
        setData(titles);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, delay]);

  return { data, isLoading, error };
};

export default fetchData;
