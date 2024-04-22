const Book = require("../models/Book")

const getBooksList = (req, res) => {
    const userId = req.session.userId
    if (!userId) {
        res.render("books", { title: "Books", userId: null })
    } else {
        const books = Book.getAll()
        res.render("books", { title: "Books", userId, books })
    }
}

module.exports = {
    getBooksList
}