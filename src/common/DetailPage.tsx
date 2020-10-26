import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { FilmAttributes, CommonAttributes } from '../features/gallery/types';
import { createDetails } from './createDetails';

export const DetailPage = (): ReactElement => {
  const { state } = useLocation<FilmAttributes | CommonAttributes>();
  const details = createDetails(state);

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