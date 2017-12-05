import axios from "axios";
const BASEURL = "/api/email";
import Auth from '../../modules/Auth'

export default {
  search: function() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/email');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {

        console.log(xhr.response.message)
      }
    });
    xhr.send();
  }
};

// NOTE: If we want to add an API key later, we put a global var at the top of this doc:
// const APIKEY = "&apikey=40e9cece";
// Then we change the line of code:
// return axios.get(BASEURL + query + APIKEY)
