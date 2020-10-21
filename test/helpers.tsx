import { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';

export type Element = (selector: string) => HTMLElement | null;
export type Render = (component: ReactElement) => ReactNode;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createContainer = () => {
  const container = document.createElement('div');

  const element: Element = selector => container.querySelector(selector);
  const render: Render = async component => ReactDOM.render(component, container);

  return {
    render,
    container,
    element,
  };
};