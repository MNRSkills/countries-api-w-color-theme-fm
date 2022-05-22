import React, { Component } from "react";
import Nav from "./nav";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themeToggle: false,
    };

    this.handleTheme = this.handleTheme.bind(this);
  }

  handleTheme(e) {
    console.log("HANDLE IT");
    return this.setState((prevState) => ({
      themeToggle: !prevState.themeToggle,
    }));
  }

  render() {
    return (
      <div className={this.state.themeToggle ? "dark" : " "}>
        <Nav
          themeHandler={() => this.handleTheme()}
          className='dark:bg-gray-800'
        />
        <div className='dark:bg-gray-800'>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
