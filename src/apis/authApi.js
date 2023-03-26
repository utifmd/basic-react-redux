import httpClient from "axios"
import { BASE_URL } from "../constants"

const login = (username, password) => new Promise((resolve, reject) => {
    httpClient.get(`${BASE_URL}/auth`).then(response => {
        if (response.status !== 200) {
            reject({message: response.statusText})
            return
        }
        const account = response.data
        if (!account){
            reject({message: `Account not found`})
            return
        }
        if (username !== account.username || password !== account.password) {
            reject({message: `Unauthorized account`})
            return
        }
        resolve(account)
    })
    .catch(error => reject(error))
})
const getAuthor = (username) => new Promise((resolve, reject) => {
    httpClient.get(`${BASE_URL}/profiles`).then(response => {
        if (response.status !== 200) {
            reject({message: response.statusText})
            return
        }
        const profile = response.data.find(profile => profile.username === username)
        if (!profile){
            reject({message: `author not found`})
            return
        }
        resolve(profile)
    })
    .catch(error => reject(error))
})

export {
    getAuthor, login
}