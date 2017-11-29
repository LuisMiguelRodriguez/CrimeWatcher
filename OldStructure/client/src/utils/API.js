import axios from "axios";

export default {
  // Gets all books
  getData: function(url) {
    return axios.get(url);
  }
};
