const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

//to get current date
const {format} = require('date-fns');
const curd = new Date();
const today = format(curd, 'yyyy-MM-dd');

router.post('/addBook', async(req,res) => {
    try {
        const newBook = new Book({
            book_name : req.body.book_name,
            book_author : req.body.book_author,
            book_price : req.body.book_price,
            book_publish_date : today,
        })
        const saveBook = await newBook.save();
        res.json(saveBook);
    } catch (error) {
        res.status(500).json({'error': error});
    }
});

router.get('/viewBook', async(req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({'error': error});
    }
})

module.exports = router;