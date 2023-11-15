import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllBook = () => {
    const [bookData, setBookData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/viewBook')
        .then(response => {
            setBookData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [])
  return (
    <div>
        <h1 align='center'>AllBook</h1>
        <table border={1} width={'600px'} align='center'>
            <thead>
                <tr>
                    <td>Book Name</td>
                    <td>Book Author</td>
                    <td>Book Price</td>
                </tr>
            </thead>
            <tbody>
                {
                    bookData.map(books => (
                        <tr key={books.book_number}>
                            <td>{books.book_name}</td>
                            <td>{books.book_author}</td>
                            <td>{books.book_price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default AllBook