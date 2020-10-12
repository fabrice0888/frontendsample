import axios from 'axios';

export default axios.create({
    baseURL: 'http://musicbrainz.org/ws/2'
});
