import axios from 'axios';

const url = 'http://localhost:8081/api';

export default {
    // get all diagnoses
    fetchDiagnoses(){

        return axios
            .get(url + '/getdiagnoses')
            .then(response=>response.data);
        },

    // get all symptoms    
    fetchSymptoms(){

        return axios
            .get(url + '/getsymptoms')
            .then(response=>response.data);
        },

    // get diagnoses based on symptoms
    getDiagnosesFromSymptoms(symptoms){
        
        return axios
            .post(url + '/symptoms', symptoms)
            .then(response=>response.data);
    }
}