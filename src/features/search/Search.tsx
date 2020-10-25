import React, { BaseSyntheticEvent, ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app';
import { createDetails } from '../../common/createDetails';
import { FETCH_SEARCH_REQUEST } from './types';

const selectableCategories = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles'
];

export const Search = (): ReactElement => {
  const { search } = useSelector((state: RootState) => state);
  const [selectedCategory, setSelectedCategory] = useState(selectableCategories[0]);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(search.result && search.result.results);

  const dispatch = useDispatch();
  
  const handleSelectedCategory = ({ target: { value } }: BaseSyntheticEvent) => {
    setSelectedCategory(value) 
  };

  const handleSearchTextChanged = ({ target: { value } }: BaseSyntheticEvent) => {
    setSearchTerm(value);
  };

  const handleClick = (event: BaseSyntheticEvent): void => {
    event.preventDefault();

    dispatch({
      type: FETCH_SEARCH_REQUEST,
      category: selectedCategory,
      searchTerm
    });
  };

  const DetailPage = () => {
    const results = search.result && search.result!.results[0];
    const details = createDetails(results as any);
    console.log(details);

    return (
      <div className="detailPage">
        <table>
          <tbody>
            {
              details.map(item => (
                <tr key={Object.keys(item)[0]}>
                  <td>{Object.keys(item)[0]}</td>
                  <td>{Object.values(item)[0]}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="searchBar">
      <select
        name="category"
        value={selectedCategory}
        onChange={handleSelectedCategory}>
        {selectableCategories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <input 
        type="search"
        value={searchTerm}
        onChange={handleSearchTextChanged}
        placeholder="Enter the search"></input>
      <input 
        type="button"
        value="Search"
        onClick={handleClick}></input>
      {search.result ? <DetailPage /> : null}
    </div>
  );
};