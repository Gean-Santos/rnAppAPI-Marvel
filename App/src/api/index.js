import axios from 'axios';
import md5 from 'js-md5';

const urlMarvel = 'https://gateway.marvel.com/v1/public/';
const keyPublica = 'a0766465ea4b57ae125da9e38d29844b';
const keyPrivada = '2614f605fa45ccec50cbfdc9fbaa48b8d3d0e9c3';
const limit = 30
const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + keyPrivada +keyPublica);
let char = ''


export async function getPersonagens ()  {
    const urlPersonagens = `${urlMarvel}characters?ts=${timestamp}&limit=${limit}&apikey=${keyPublica}&hash=${hash.hex()}`
    console.log(urlPersonagens)
    const ax = await axios.get(urlPersonagens)
    .then(res => res.data.data.results)
    .then(p => this.state.setState(p))  
}

