import {BASE_URI} from './constants'

// param = { language: 'javascript', stars: '10'}
export const buildSearchURI = ({language, stars}) => {
    const encodedURI = window.encodeURI(`${BASE_URI}stars:>${stars}+language:${language}
    &sort=created&order=desc&type=Repositories`);
    return encodedURI;
}
