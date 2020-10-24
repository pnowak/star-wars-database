import React from 'react';
import { Categories } from '../features/categories/Categories';
import { Gallery } from '../features/gallery/Gallery';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const App = () => {
  return (
    <div>
      <Categories />
      <Gallery />
    </div>
  );
};