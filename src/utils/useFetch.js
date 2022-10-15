import { useEffect, useState } from "react";

export function useFetch() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    const axios = require('axios').default;
    const url = 'https://api.thecatapi.com/v1/breeds';
    const VALIDCATS = ['abys', 'birm', 'ctif', 'char', 'drex', 'mcoo', 'manx', 'raga', 'rblu'];

    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      axios(url, { signal: controller.signal })
        .then(res => {
          const data = res.data.filter((cat) => VALIDCATS.includes(cat.id));
          setData(data)
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false));

      return () => {
        controller.abort();
      };
    }, []);

    return { loading, data, error };
}