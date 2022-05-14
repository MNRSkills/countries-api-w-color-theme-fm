import React, { Component } from "react";
import axios from "axios";
import Countries from "./Component/countries";
import CountryDetail from "./Component/countryDetail";
import SearchBar from "./Component/searchBar";
class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      countryDetail: [],
      countryName: "",
      errorMsg: "",
    };

    this.handleRegion = this.handleRegion.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    console.log("MADE MAN", e.target.value);
    this.setState({
      countryName: e.target.value,
    });
  }

  handleSearchSubmit(e) {
    axios
      .get(`https://restcountries.com/v2/name/${this.state.countryName}`)
      .then((res) =>
        res.data.map((detail) => {
          this.setState({
            countryDetail: detail,
          });
        })
      )
      .catch((error) =>
        this.setState({
          errorMsg: error.response.data.message,
        })
      );

    e.preventDefault();
  }

  handleRegion(region) {
    if (region === "World") {
      this.callAPI();
    } else {
      this.callAPI(region);
    }
  }

  async callAPI(region = null) {
    await axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        if (region) {
          this.setState({
            countries: res.data.filter((regions) => {
              return regions.region === region;
            }),
          });
        } else {
          this.setState({
            countries: res.data,
          });
        }
      })
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
      <div className='container'>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <SearchBar
          handleChange={(countryName) => this.handleSearchChange(countryName)}
          handleSubmit={(e) => this.handleSearchSubmit(e)}
        />
        <div className='relative border shadow-xl'>
          <ul>
            <li onClick={() => this.handleRegion("World")}>Worldwide</li>
            <li onClick={() => this.handleRegion("Africa")}>Africa</li>
            <li onClick={() => this.handleRegion("Americas")}>Americas</li>
            <li onClick={() => this.handleRegion("Asia")}>Asia</li>
            <li onClick={() => this.handleRegion("Europe")}>Europe</li>
            <li onClick={() => this.handleRegion("Oceania")}>Oceania</li>
            <li onClick={() => this.handleRegion("Polar")}>Polar</li>
          </ul>
        </div>
        <div>
          {this.eachCountry()}
          <CountryDetail countryDetail={this.state.countryDetail} />
        </div>
      </div>
    );
  }
}
export default App;
