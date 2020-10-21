import React from 'react';
import { createContainer, Element } from './helpers';
import { Categories } from '../src/features/categories/Categories';

describe('Category', () => {
  let element: Element, render;

  beforeEach(() => {
    ({ element, render } = createContainer());
  });
  
  it('renders a div with the right class name', () => {
    render(<Categories />);

    expect(element('div.category-list')).not.toBeNull()      
  });

  it('renders multiple category in an ul element', () => {
    render(<Categories />);

    expect(element('ul')).not.toBeNull();
    expect(element('ul').children).toHaveLength(6);
  });
})