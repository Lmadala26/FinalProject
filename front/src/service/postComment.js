const postComment = async({id}) =>{
    const url = `${import.meta.env.VITE_API_URL}/comments`
    
        const response = await fetch(url, {
            method: 'POST',
            body: data,
            headers:{
                authorization: token
            }
        });
    
        const json = await response.json();
    
        if(!response.ok) throw new Error(json.message);
    
        return json.data;
    
}
export default postComment;

