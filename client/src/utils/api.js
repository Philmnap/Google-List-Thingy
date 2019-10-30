import axios from "axios";


export default {

    searchBooks: function (query) {
        return axios.get("/api/search", { params: { q: query } });
    },

    getBooks: function () {
        return axios.get("/api/books");
    },

    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },

    saveBook: function (bookData) {

        return axios.post("/api/books", bookData);
    }
};