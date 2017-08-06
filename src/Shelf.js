import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'
import './App.css';

class Shelf extends Component {
  state = {
    booksOnShelf: []
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  }

  componentDidMount() {

  }

  render() {
    let booksOnShelf = this.props.books.filter((book) => this.props.shelfName === book.shelf);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnShelf.map((book) => (
              <li key={book.id} className="">
                <Book {...book}  moveBook={this.props.moveBook} />
              </li>
            ))}  
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;