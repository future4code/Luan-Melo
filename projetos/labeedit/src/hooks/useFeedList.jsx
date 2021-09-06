import { useState, useEffect } from "react";
import { doFeed } from "../services/RequestApi";

export function useFeedList(token) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchList() {
      setLoading(true);
      const response = await doFeed(token);
      setData(response);
      setLoading(false);
    }

    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading };
}
