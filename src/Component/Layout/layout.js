import React from "react";
import Nav from "./nav";

const Layout = (props) => {
  return (
    <div className='layout bg-red-400'>
      <Nav />
      {props.children}
    </div>
  );
};

export default Layout;
