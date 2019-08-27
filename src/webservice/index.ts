import axios from 'axios';

export const GET_HUE_LIGHTS = async () => {
    const url = 'http://192.168.0.25/api/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/lights';
    let res
    await axios.get(url)
        .then(response => res = response)
        .catch(e => console.log(e));
    return res
}

export const CHANGE_HUE_LIGHTS = async (id: any, bodyData: any) => {
    const url = 'http://192.168.0.25/api/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/lights/' + id + '/state'
    let res
    await axios.put(url, bodyData, { headers: { "Content-Type": "text/plain" } })
        .then(response => res = response)
        .catch(e => console.log(e));
   return res
}
