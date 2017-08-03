import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'
import './App.css';

class Shelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    //books: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            
            {this.props.books.map((book) => (
              <li key={book.id} className="">
                <Book {...book}  />
              </li>
            ))}  
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;