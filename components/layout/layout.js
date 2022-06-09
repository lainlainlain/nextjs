import React from 'react';
import MainHeader from './main-header';

function Layout(props) {
  return (
    <>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
