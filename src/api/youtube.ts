import axios from 'axios'
const KEY = 'AIzaSyDQjQVHn_AW89644SbMWtos6Buve5Z8j1I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '25',
        type: 'video',
        key: KEY
    }
})