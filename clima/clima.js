const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2fe3f34aa49a7e722329e500f7c71bac&units=metric`);
    return resp.data.main.temp;

}


module.exports = {

    getClima
}