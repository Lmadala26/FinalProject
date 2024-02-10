const modifyUserService = async (data, token) => {
  const url = `${import.meta.env.VITE_API_URL}/users/edit`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      authorization: token,
    },
    body: data,
  });

  const json = await response.json();

  if (!response.ok) throw new Error(json.message);
};

export default modifyUserService;
