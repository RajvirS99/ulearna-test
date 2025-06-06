export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = res.json();
    return data;
}

export const getPostsById= async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }
    const data = res.json();
    return data;
}

export const deletePosts = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',});
    const data = res.json();
    return data;
}