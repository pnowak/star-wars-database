import React, { ReactElement } from 'react';
import { Categories } from '../features/categories/Categories';
import { Gallery } from '../features/gallery/Gallery';

export const App = (): ReactElement => {
  return (
    <div>
      <Categories />
      <Gallery />
    </div>
  );
};