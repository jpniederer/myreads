import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class Search extends Component {
  render() {
    return (
      <div>
        <Link className="close-search" to="/">Close</Link>
      </div>
    )
  }
}

export default Search;