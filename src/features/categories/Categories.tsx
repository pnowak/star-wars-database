import React, { ReactElement } from 'react';

const categoriesList = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles'
];

export const Categories = () : ReactElement => {
  return (
    <div className="category-list">
      <ul>
        {categoriesList.map(category => (
          <li key={category}>
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </div>
  )
};