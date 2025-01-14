import axios from 'axios';
import store from '../store.js'




const url = 'http://localhost:8081/api';

axios.defaults.headers.common['x-access-token'] = store.state.token; 


export default {

    // send a patient to the server
    createPatient(patient){
        console.log(store.state.token);
        return axios
            .post(url + '/request', patient)
           
    },

    // get all patients from server for one single user
    async fetchPatients(){
        return axios
        .get(url + "/patients/getPatientsByUser")
        .then(response => response.data);

    },

    // get a single patient from server
    async fetchSinglePatient(id){
        return axios
        .get (url + "/patients/id/" + id)
        .then(response => response.data); 
    },

    // get all patients from server
    async allPatients(){
        return axios
        .get(url + "/patients")
        .then(response => response.data);

    },
}
