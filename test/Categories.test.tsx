import React from 'react';
import { createContainer, Element, Elements } from './helpers';
import { Categories } from '../src/features/categories/Categories';

describe('Categories', () => {
  let element: Element, elements: Elements, render;

  beforeEach(() => {
    ({ element, elements, render } = createContainer());
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

  it('renders each category in an li', () => {
    render(<Categories />);

    expect(elements('li')).toHaveLength(6);
    expect(elements('li')[0].textContent).toEqual('films');
    expect(elements('li')[1].textContent).toEqual('people');
    expect(elements('li')[2].textContent).toEqual('planets');
    expect(elements('li')[3].textContent).toEqual('species');
    expect(elements('li')[4].textContent).toEqual('starships');
    expect(elements('li')[5].textContent).toEqual('vehicles');
  });
})