const defaultPosts = [
    {
        title: 'Postingan satu',
        content: 'Adapun datanya sebagai berikut.',
        status: 0
    },
    {
        title: 'Postingan dua',
        content: 'Adapun datanya sebagai berikut.',
        status: 0
    },
    {
        title: 'Postingan tiga',
        content: 'Adapun datanya sebagai berikut.',
        status: 0
    }
]
export const getPosts = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(defaultPosts)
    }, 1000);
})