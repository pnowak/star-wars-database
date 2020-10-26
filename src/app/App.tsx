import React, { ReactElement } from 'react';
import { Categories } from '../features/categories/Categories';
import { Gallery } from '../features/gallery/Gallery';
import { Search } from '../features/search/Search';
import * as WebFontLoader from 'webfontloader';
import '../styles/App.scss';

WebFontLoader.load({
  google: {
    families: ['Play:400,700', 'sans-serif']
  }
});

export const App = (): ReactElement => {
  return (
    <div>
      <Search />
      <Categories />
      <Gallery />
    </div>
  );
};