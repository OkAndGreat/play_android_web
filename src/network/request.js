import axios from 'axios'

axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';
// 调用 axios.create() 函数，创建一个 axios 的实例对象，用 request 来接收
const request = axios.create({})

export default request