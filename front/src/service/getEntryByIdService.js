const getCommentsByIdService = async (commentsId) => {
  const url = `${import.meta.env.VITE_API_URL}/entries/${commentsId}`;

  const response = await fetch(url);

  const json = await response.json();

  return json;
};

export default getCommentsByIdService;
