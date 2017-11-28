import axios from "axios";
const BASEURL = "https://opendata.miamidade.gov/resource/k7xd-qgzt.json";

export default {
  search: function(query) {
    return axios.get(BASEURL + query)
  }
};

// NOTE: If we want to add an API key later, we put a global var at the top of this doc:
// const APIKEY = "&apikey=40e9cece";
// Then we change the line of code:
// return axios.get(BASEURL + query + APIKEY)