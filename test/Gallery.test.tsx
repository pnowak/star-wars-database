import React from 'react';
import {
  createContainerWithStore,
  Element,
  Elements
} from './helpers';
import { Gallery } from '../src/features/gallery/Gallery';

describe('Gallery', () => {
  let element: Element, elements: Elements, container: HTMLDivElement, renderWithStore;

  beforeEach(() => {
    ({ element, container, renderWithStore } = createContainerWithStore());
  });
  
  it('renders a div with the right class name', () => {
    renderWithStore(<Gallery />);

    expect(element('div.gallery')).not.toBeNull()      
  });

  it('initially nothing to show', () => {
    renderWithStore(<Gallery />);

    expect(container.textContent).toMatch('');
  });

  it.skip('renders multiple cards in an ol element', async () => {
    await renderWithStore(<Gallery />);

    expect(element('ol')).not.toBeNull();
    expect(element('ol').children).toHaveLength(2);
  });

  it.skip('renders each cards in an li', async () => {
    await renderWithStore(<Gallery />);

    expect(elements('li')).toHaveLength(2);
  });
})