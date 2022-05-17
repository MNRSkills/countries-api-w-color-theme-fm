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
      searchBtn: true,
    };

    this.handleRegion = this.handleRegion.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  // HELPER
  searchBtn(e) {
    // console.log("wHAT IS THIS", e);
    this.setState({
      searchBtn: false,
    });
  }

  /// ...

  /// MY HANDLERS WITH CARE

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

  /// .....

  //INITIAL CALL TO THE API REQUESTING ALL

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
      .catch((error) => console.log("kaya meany", error));
  }

  eachCountry() {
    return this.state.countries.map((country, index) => {
      return <Countries country={country} key={index} />;
    });
  }

  /// .....

  /// MOUNTED //

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
          searchBtn={(e) => this.searchBtn(e)}
        />
        <div className='relative border shadow-xl bg-gray-50 w-1/2 p-4'>
          <h1 className='text-sm'>Filter by Region</h1>
          <ul className='absolute top-20 left-0 bg-gray-50 w-full mt-2 invisible md:visible'>
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
          {this.state.searchBtn !== true ? (
            <CountryDetail countryDetail={this.state.countryDetail} />
          ) : (
            this.eachCountry()
          )}
        </div>
      </div>
    );
  }
}
export default App;
