import React from 'react';
import { Route, Link } from 'react-router-dom';
import Book from './Book';
import Search from './Search';
import Shelf from './Shelf';
import * as BooksAPI from './utils/BooksAPI';
import * as Shelves from './utils/Shelves';
import './App.css';

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books })
    });
  }

  refreshBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books })
    });
  }

  updateBook = (bookId, shelf) => {
    BooksAPI.update(bookId, shelf).then((response) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ allBooks: books })
      });
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title="Currently Reading" shelfName={Shelves.CURRENTLY_READING} books={this.state.allBooks} moveBook={this.updateBook} />
                <Shelf title="Want to Read" shelfName={Shelves.WANT_TO_READ} books={this.state.allBooks} moveBook={this.updateBook} />
                <Shelf title="Read" shelfName={Shelves.READ} books={this.state.allBooks} moveBook={this.updateBook} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a Book</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <Search moveBook={this.updateBook} />
        )} />
      </div>
    )
  }
}

export default BooksApp;