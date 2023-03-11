import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../store/bookSlice';

const Books = () => {
  const [bookName, setBookName] = useState(null);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.items);
  const handleChange = (e) => {
    e.preventDefault();
    setBookName(e.target.value);
  };
  const handleAddBook = () => {
    dispatch(addBook(bookName));
  };
  const handleRemoveBook = (bookName) => {
    dispatch(removeBook(bookName));
  };
  console.log(bookName);
  return (
    <div>
      <h1>Books Collection</h1>
      <input type="text" onChange={(e) => handleChange(e)} name="" id="" />
      <button onClick={() => handleAddBook()}>Add</button>
      <br />
      {books?.length > 0 &&
        books.map((book, i) => (
          <div key={i}>
            <span key={i}>{book}</span>
            <button onClick={() => handleRemoveBook(book)}>remove book</button>
          </div>
        ))}
    </div>
  );
};

export default Books;
