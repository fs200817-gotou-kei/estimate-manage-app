import axios from "axios"

const url = 'http://127.0.0.1:8080/api/v1/estimates'

async function getAllEstimates() {
    var estimates

    await axios.get(url)
        .then(res => {
            estimates = res.data
        })
        .catch(err => console.log(err))
    return estimates
}

export default {
    getAllEstimates
}