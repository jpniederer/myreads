import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Shelves from './utils/Shelves';
import './App.css';

class Book extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    moveBook: PropTypes.func.isRequired,
    imageLinks: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    //authors: PropTypes.array.isRequired,
  }

  handleChange(event) {
    let bookId = {id: this.props.id};
    this.props.moveBook(bookId, event.target.value);
  }

  render() {
    const {shelf} = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks["thumbnail"]})` }}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={this.handleChange}>
              <option value="" disabled>Move to...</option>
              <option value={Shelves.CURRENTLY_READING}>
                  Currently Reading
              </option>
              <option value={Shelves.WANT_TO_READ}>
                  Want to Read
              </option>
              <option value={Shelves.READ}>
                  Read
                </option>
              <option value="none">
                  None
                 </option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    )
  }
}

export default Book;