import axios from "axios";


export default {
    getBooks: function(q) {
        return axios.get("/api/google", { params: { q: "title:" + q}});
    },
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    deleteBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    saveBook: function(q) {
        return axios.get("/api/books", bookData);
    },
};