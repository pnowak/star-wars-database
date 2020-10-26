import React, { ReactElement } from 'react';
import { CardProps } from './types';

export const Card = ({ category, name }: CardProps): ReactElement => (
  <div>
    <div>{name}</div>
    <span>{category}</span>
  </div>
);