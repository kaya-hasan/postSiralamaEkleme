const post = [
    { name: 'post1' },
    { name: 'post2' },
    { name: 'post3' },
    { name: 'post4' }
]

const postList = () => {
    post.map(post => {
        console.log(post.name);
    })
}



console.log("İlk liste");
postList();




const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        post.push(newPost);
        resolve(post);
        reject('Hata var')
    })
    return promise1;
}


async function newListPost(){
    try {
        await addPost({name: 'post5'});
        await addPost({name: 'post6'});
        await addPost({name: 'post7'})
        postList()
    } catch (error) {
        console.log(error);
    }
}



console.log("-------------------------");
console.log("yeni liste");
console.log("-------------------------");
newListPost();

