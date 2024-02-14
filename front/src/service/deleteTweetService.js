export const deleteTweetService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/comments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
})}