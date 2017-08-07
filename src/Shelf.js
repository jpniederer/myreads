import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';
import './App.css';

class Shelf extends Component {
  state = {
    booksOnShelf: []
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  }

  render() {
    let booksOnShelf = this.props.books.filter((book) => this.props.shelfName === book.shelf);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <BookList books={booksOnShelf} moveBook={this.props.moveBook} />
        </div>
      </div>
    )
  }
}

export default Shelf;