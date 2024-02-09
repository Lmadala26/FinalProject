const newPasswordService = async ({ email, recoverPassCode, newPass }) => {
  const url = `${import.meta.env.VITE_API_URL}/users/password`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, recoverPassCode, newPass }),
  });

  const json = await response.json();

  if (!response.ok) throw new Error(json.message);

  return json;
};

export default newPasswordService;
