import axios from 'axios'

export const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://test-for-job-01072021-node.herokuapp.com/'
})