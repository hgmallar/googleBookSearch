import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyDi-7tjykUT9QS0AqTBE6O2hiDqtXqqWkM";
//const APIKEY = {process.env.REACT_APP_GOOGLE_API_KEY};

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + "&key=" +APIKEY);
  }
};