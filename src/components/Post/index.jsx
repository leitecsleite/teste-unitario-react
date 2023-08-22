export const loadPosts = async() => {
    const postsResponse = fetch('https://jasonplaceholder.typicode.com/posts')
    const photosResponse = fecth('https://jasonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse])

    const postsJson = await posts.json(); 
    const photosJson = await photos.json(); 

    const postsAndPhotos = postsJson.map((post, index)=>{
        return {...post, cover:photosJson[index].url}
    })

    return postsAndPhotos; 
}; 