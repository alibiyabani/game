import axios from 'axios'

export const getAllGames = async (curentPage) => {

    const apiKey = "0b5fcd7323584352889336bdeb1538a9"
    let url = `https://api.rawg.io/api/games?key=${apiKey}&page=${curentPage}&page_size=100`

    try {
        const response = await axios.get(url)
        return response.data
    }
    catch (e) {
        console.log(e)
    }

};



