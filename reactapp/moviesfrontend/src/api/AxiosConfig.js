import axios from 'axios'

export default axios.create({

    // For not letting cors blocking 
    baseURL:"https://aac5-2405-201-1d-60a4-9d2b-12d8-2896-cabd.ngrok-free.app/",
    headers:{"ngrok-skip-browser-warning":"true"}       
})