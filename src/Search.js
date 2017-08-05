import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import sortBy from 'sort-by';

class Search extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query });

    if (query !== '') {
      BooksAPI.search(query, 20).then((searchResult) => {
        if (searchResult && !searchResult.error) {
          this.setState({
            books: searchResult.map((book) => book)
          })
        } else {
          this.setState({
            books: []
          })
        }
      })
    } else {
      this.setState({
        books: []
      })
    }
  }

  render() {
    const { query, books } = this.state;
    let displayedBooks = books;
    displayedBooks.sort(sortBy('title'))

    return (

      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <div className="showing-results">
            <span>
              Now showing {displayedBooks.length} books matching your query.
              </span>
          </div>
          <ol className="books-grid">
            {displayedBooks.map((book) => (
              <li key={book.id} className="">
                <Book {...book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;