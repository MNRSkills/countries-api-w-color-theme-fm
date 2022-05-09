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

    this.eachCountry = this.eachCountry.bind(this);
  }

  async callAPI() {
    await axios
      .get("https://restcountries.com/v2/all")
      .then((res) =>
        this.setState({
          countries: res.data,
        })
      )
      //SEND TO STATE THEN TO A COMPONENT OR VISE VERSA
      .catch((error) => console.log("kaya meany", error));
  }

  eachCountry() {
    return this.state.countries.map((country, index) => {
      return <Countries country={country} key={index} />;
    });
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <div>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        {this.eachCountry()}
      </div>
    );
  }
}
export default App;
