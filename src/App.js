import React, { Component } from "react";
import axios from "axios";
import Countries from "./Component/countries";
import CountryDetail from "./Component/countryDetail";
import SearchBar from "./Component/searchBar";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      countryDetail: [],
      countrySearch: false,
      isOpen: false,
      errorMsg: "",
    };

    this.handleRegion = this.handleRegion.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  /// ...

  /// MY HANDLERS WITH CARE

  async handleSearchChange(e) {
    //if target value is when data is triggered
    if (e.target.value.length >= 2) {
      await axios
        .get(`https://restcountries.com/v2/name/${e.target.value}`)
        .then((res) =>
          res.data.map((item) => {
            return this.setState({
              countryDetail: item,
              countrySearch: true,
            });
          })
        )
        .catch((error) =>
          this.setState({
            errorMsg: `${error}`,
          })
        );
    } else {
      // console.log("PLACING THINGS BACK");
      this.setState({
        countryDetail: [],
        countrySearch: false,
      });
    }
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
      <div className='container dark:text-white'>
        <SearchBar
          handleChange={(countryName) => this.handleSearchChange(countryName)}
          handleSubmit={(e) => this.handleSearchSubmit(e)}
        />
        <div className='relative shadow-xl dark:bg-wordsNight  w-1/2 p-4'>
          <button
            className='flex rounded hover:dark:bg-night'
            onClick={() => this.setState({ isOpen: true })}>
            <h1 className='text-sm mx-4'>Filter by Region</h1>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <button
            className='fixed h-full w-full cursor-default'
            onClick={() => this.setState({ isOpen: false })}></button>
          {this.state.isOpen ? (
            <ul className='absolute bg-gray-100 rounded top-20 left-0 dark:bg-wordsNight p-3 w-full mt-2'>
              <li
                onClick={() => this.handleRegion("World")}
                className='hover:bg-gray-400 hover:text-white cursor-pointer'>
                Worldwide
              </li>
              <li
                onClick={() => this.handleRegion("Africa")}
                className='hover:bg-gray-400 cursor-pointer'>
                Africa
              </li>
              <li
                onClick={() => this.handleRegion("Americas")}
                className='hover:bg-gray-400 cursor-pointer'>
                Americas
              </li>
              <li
                onClick={() => this.handleRegion("Asia")}
                className='hover:bg-gray-400 cursor-pointer'>
                Asia
              </li>
              <li
                onClick={() => this.handleRegion("Europe")}
                className='hover:bg-gray-400 cursor-pointer'>
                Europe
              </li>
              <li
                onClick={() => this.handleRegion("Oceania")}
                className='hover:bg-gray-400 cursor-pointer'>
                Oceania
              </li>
              <li
                onClick={() => this.handleRegion("Polar")}
                className='hover:bg-gray-400 cursor-pointer'>
                Polar
              </li>
            </ul>
          ) : null}
        </div>
        <div>
          {this.state.countrySearch !== true ? (
            this.eachCountry()
          ) : (
            <div className='container h-screen'>
              <CountryDetail countryDetail={this.state.countryDetail} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default App;
