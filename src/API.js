import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://test-for-job-01072021.herokuapp.com/'
})