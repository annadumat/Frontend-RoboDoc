import axios from 'axios'; 

const url = 'http://localhost:8081/api';

export default {
    // send login request
    login(credentials){
        return axios
            .post(url + '/auth/login/', credentials)
            .then(response=>response.data);
    }, 

     // send login request
    signUp(credentials){
        return axios
            .post(url + '/auth/register/',credentials)
            .then(response => response.data);
    },

    // check if user is admin
    isAdmin(){
        return axios
            .get(url + '/auth/isAdmin')
            .then(response=>response.data);
    }
};
