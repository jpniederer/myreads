import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'
import './App.css';

function BookList (props) {
  return (
    <ol className="books-grid">
      {props.books.map((book) => (
        <li key={book.id} className="list-books-content">
          <Book {...book} moveBook={props.moveBook} />
        </li>
      ))}
    </ol>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired,
}

export default BookList;