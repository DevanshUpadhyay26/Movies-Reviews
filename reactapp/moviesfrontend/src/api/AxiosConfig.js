import axios from 'axios'

export default axios.create({

    // For not letting cors blocking 
    baseURL:"https://f99f-2405-201-1d-60a4-6d18-15e0-c101-fb1f.ngrok-free.app/",
    headers:{"ngrok-skip-browser-warning":"true"}       
})