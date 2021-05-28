import axios from "axios";

const instace = axios.create({
    baseURL: 'http://localhost:5001/clone-ce2b9/us-central1/api' //THE api (cloud function ) URL
});

export default instace;