import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async callAPI() {
    await axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => console.log("this is the call", res.data))
      .catch((error) => console.log("kaya meany", error));
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <div>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </div>
    );
  }
}
export default App;
