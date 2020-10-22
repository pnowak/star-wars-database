import React, { BaseSyntheticEvent, ReactElement, useState } from 'react';

const categoryList = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles'
];

export const Categories = () : ReactElement => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="category-list">
      <ul>
        {categoryList.map((category, index) => (
          <li key={category} className={index === activeCategory ? 'active' : ''}
            onClick={() => setActiveCategory(index)}>
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </div>
  )
};