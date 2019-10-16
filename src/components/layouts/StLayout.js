import React from 'react';
import StHeader from './StHeader';
import StFooter from './StFooter';

const StLayout = props => (
  <div className="st-app">
    <StHeader />
    <main className="l-main">
      {props.children}
    </main>
    <StFooter />
  </div>
);

export default StLayout;
