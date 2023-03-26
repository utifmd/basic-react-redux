import httpClient from "axios"
import { BASE_URL } from "../constants"

export const getPosts = () => new Promise((resolve, reject) => {
    httpClient.get(`${BASE_URL}/posts`).then(response => {
        if(response.status !== 200){
            reject({message: response.statusText})
            return
        }
        const posts = response.data
        if(!posts){
            reject({message: `Invalid data`})
            return
        }
        resolve(posts)
    })
    .catch(error => reject(error))
})

export const savePosts = (post) => new Promise((resolve, reject) => {
    httpClient.post(`${BASE_URL}/posts`, post).then(response => {
        if(response.status !== 201){
            reject({message: response.statusText})
            return
        }
        const posts = response.data
        if(!posts){
            reject({message: `Invalid data`})
            return
        }
        resolve(posts)
    })
    .catch(error => reject(error))
})

export const updatePosts = (id, post) => new Promise((resolve, reject) => {
    httpClient.patch(`${BASE_URL}/posts/${id}`, post).then(response => {
        if(response.status !== 200){
            reject({message: response.statusText})
            return
        }
        const posts = response.data
        if(!posts){
            reject({message: `Invalid data`})
            return
        }
        resolve(posts)
    })
    .catch(error => reject(error))
})