import axios from 'axios'
/*
https://hubeau.eaufrance.fr/api/vbeta/  
*/
export default(url='https://hubeau.eaufrance.fr/api/vbeta') => {
    return axios.create({
        baseURL: url,
    })

}