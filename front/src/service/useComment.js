export const getAllCommentsService = async ( )=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/comments`);
    const json = await response.json();

    if(!response.ok){
        throw new Error(json.message);
    };

    return json.data;
}

export const getUserCommentService = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/user/${id}/comment`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sendCommentService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });
