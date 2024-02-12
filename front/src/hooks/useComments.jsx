import { useState, useEffect } from "react";
import fetchApi from "../service/fetchApi";

const useComments = () => {
  const { VITE_API_URL } = import.meta.env;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getAllComments = async () => {
      const data = await fetchApi(`${VITE_API_URL}/comments`);
      setEntries(data.data);
    };

    getAllComments();
  }, []);

  return comments;
};

export default useComments;
