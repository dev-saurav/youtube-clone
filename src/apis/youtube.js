import axios from 'axios';

const KEY = "AIzaSyAFeh32ETf84a3kzV0C4QAMFuYPOWErFDg";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})