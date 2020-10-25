import React, { BaseSyntheticEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Filter, SET_FILTER } from './types';

const categoryList: Filter[] = [
  'all',
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles'
];

export const Categories = (): ReactElement => {
  const [activeCategory, setActiveCategory] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (event: BaseSyntheticEvent, index: number): void => {
    setActiveCategory(index);

    const category = event.target.textContent;

    dispatch({
      type: SET_FILTER,
      filter: category
    });
  }

  return (
    <div className="category-list">
      <ul>
        {categoryList.map((category, index) => (
          <li key={category} className={index === activeCategory ? 'active' : ''}
            onClick={event => handleClick(event, index)}>
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </div>
  )
};