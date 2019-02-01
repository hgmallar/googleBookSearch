import axios from "axios";

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const keycode = '&key=';
const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY;

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(`${BASEURL}${query}${keycode}${APIKEY}`);
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }

};