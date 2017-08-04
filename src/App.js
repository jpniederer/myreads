import React from 'react';
import { Route, Link } from 'react-router-dom';
import Book from './Book';
import Search from './Search';
import Shelf from './Shelf';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    allBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books })
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
                <Shelf title="Currently Reading" shelfName="currentlyReading" books={this.state.allBooks} />
                <Shelf title="Want to Read" shelfName="wantToRead" books={this.state.allBooks} />
                <Shelf title="Read" shelfName="read" books={this.state.allBooks} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a Book</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp;
