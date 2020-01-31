// import React from 'react';
import axios from 'axios'
const baseUrl="https://13.232.203.141:9091/visitor/"

 class DocumentService {

    static postApi(url,data){
        return axios.post(baseUrl + url, data);   
    }

    static getApi(url){
        return axios.get(baseUrl + url);   
    }

    static editApi(url){
        return axios.get(baseUrl + url);   
    }

    static deleteApi(url){
        return axios.delete(baseUrl + url);   
    }
}

export default DocumentService
