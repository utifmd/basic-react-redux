const defaultAuth = {
    username: 'utifmd',
    password: '121212'
}
const defaultProfiles = [
    {
        name: 'Utif Milkedori',
        username: 'utifmd',
        address: 'Padang, Indonesia',
        education: {
            elementary: 'SD Negri 1 Padang',
            junior: 'SMP Negri 1 Padang',
            senior: 'SMA Negri 1 Padang',
            diploma: 'Universitas Padang',
            degree: 'Universitas Padang'
        },
        organization: 'PT. Code Development Indonesia',
        experience: {
            company: 'PT. Code Development Indonesia',
            title: 'Software Engineer',
            jobDesc: 'Junior Developer'
        }
    }
]
const login = (username, password) => new Promise((resolve, reject) => {
    const profile = defaultProfiles.find(profile => profile.username === username)
    setTimeout(() => {
        if (username === defaultAuth.username && password === defaultAuth.password) resolve(profile)
        else reject('Unauthorized account')
    }, 1000);
})
const getAuthor = (username) => new Promise((resolve, reject) => {
    const profile = defaultProfiles.find(profile => profile.username === username)
    setTimeout(() => {
        resolve(profile)
    }, 1000);
})

export {
    getAuthor, login
}