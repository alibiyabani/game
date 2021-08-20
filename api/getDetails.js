import axios from 'axios'

export const getGameDetail = async (id) => {

    const apiKey = "0b5fcd7323584352889336bdeb1538a9"
    let url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`

    try {

        const result = await axios.get(url);
        return result.data;   
    }
    catch(e) {
        console.log(e)
    }

}