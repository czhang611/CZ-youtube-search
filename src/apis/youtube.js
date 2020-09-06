import axios from 'axios';

const KEY = 'AIzaSyB_0qXo6V_mljGM8Gh8kPnsy3TI-_4pt_g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});