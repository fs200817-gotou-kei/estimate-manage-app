import axios from "axios";

const url = 'http://127.0.0.1:8080/api/v1/estimates'

function getAllEstimates() {
    return axios.get(url)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
}

export default {
    getAllEstimates
}