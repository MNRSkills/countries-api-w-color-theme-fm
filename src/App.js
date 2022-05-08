import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Countries from "./Component/countries";
class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  async callAPI() {
    await axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) =>
        console.log(
          "THIS SI STATE",
          res.data.map((country) => {
            console.log("COUNTRY", country);
          })
        )
      )
      // .then((res) => this.setState({ countries: res.data })) //SEND TO STATE THEN TO A COMPONENT OR VISE VERSA
      .catch((error) => console.log("kaya meany", error));
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <div>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <Countries />
      </div>
    );
  }
}
export default App;
