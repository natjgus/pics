//We are going to add all the code related to axios and unsplash here so that we do not have it in our 
//app class

import axios from 'axios';

export default axios.create({
//create method allows us to make a customized copy of the axios request
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5290932eb6600623a22bfb00d2be9433cb1768ca3e0452e87e91b08c5f39fb2a'
    }
})