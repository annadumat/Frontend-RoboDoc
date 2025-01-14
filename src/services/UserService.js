import axios from 'axios'

const url = 'http://localhost:8081/api';

export default {

    // get all users from server
    fetchAllUsers () {
        return axios
                .get(url + '/user/')
                .then(response => response.data);  
    },

    // get a single user by id from server 
    fetchSingleUser(id) {
        axios 
        .get(url + '/user/' + id)
        .then(response => response.data); 
    },

    // delete a single user from server
    deleteUser(id){
        return axios
        .delete(url + '/user/id/' + id)
        .then(response => response.data)
    },

    // get a single user by username from server 
    getUserByUsername(username){
        return axios
        .get(url + '/user/username/' + username)
        .then(response=>response.data)
    }

}
