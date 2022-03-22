import React from 'react';
import ReactDOM from 'react-dom';
import BannerHeader from './BannerHeader';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BannerHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});