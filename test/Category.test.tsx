import React from 'react';
import { createContainer, Element } from './helpers';
import { Category } from '../src/features/category/Category';

describe('Category', () => {
  let element: Element, render;

  beforeEach(() => {
    ({ element, render } = createContainer());
  });
  
  it('renders a div with the right class name', () => {
    render(<Category />);

    expect(element('div.category-list')).not.toBeNull()      
  });
})