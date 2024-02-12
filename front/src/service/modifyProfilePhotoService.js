const modifyProfilePhotoService = async ({ data, token }) => {
  const url = `${import.meta.env.VITE_API_URL}/users/profilephoto`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: data,
  });

  const json = await response.json();

  if (!response.ok) throw new Error(json.message);
};

export default modifyProfilePhotoService;
