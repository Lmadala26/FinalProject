const modifyUserService = async ({ data, token }) => {
  const { VITE_API_URL } = import.meta.env;

  const url = `${VITE_API_URL}/users/edit`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: data,
  });

  const json = await response.json();

  if (!response.ok) throw new Error(json.message);
};

export default modifyUserService;
