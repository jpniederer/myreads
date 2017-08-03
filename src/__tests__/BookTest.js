import React from 'react';
import Book from '../Book';
import { shallow } from 'enzyme';

describe('Book', () => {
  const testProps = {
    
  }

  it('Renders a book', () => {
    const wrapper = shallow(
      <Book
      {...testProps}
     />
    );

    expect(wrapper).toHaveProperty("");
  })
})