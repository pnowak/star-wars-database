import React, { ReactElement } from 'react';

type CardProps = {
  category: string,
  name: string
}

export const Card = ({ category, name }: CardProps): ReactElement => (
  <div>
    <div>{name}</div>
    <span>{category}</span>
  </div>
);