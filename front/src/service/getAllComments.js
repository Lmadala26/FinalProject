export const getAllTweetsService = async () => {
const response = await fetch(`http://localhost:3000/comments`, {
  headers: {
    'Cache-Control': 'no-cache'
  }
});


  const json = await response.json();
console.log(json);
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data.comments;
};