import React, { Component } from "react";
import Axios from "axios";
import Weather from "./Weather";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherObj: "",
      search: "",
      fiveDay: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.error !== this.state.error) {
      this.getWeather();
    }
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  getWeather = async () => {
    const city = this.state.search;
    await Axios.get(
      `https://www.metaweather.com/api/location/search/?query=${city}`
    ).then(async res => {
      if (res.data[0]) {
        // console.log(res.data[0])
        await Axios.get(
          `http://www.metaweather.com/api/location/${res.data[0].woeid}`
        ).then(result =>
          this.setState({
            weatherObj: result.data,
            fiveDay: result.data.consolidated_weather,
            search: ""
          })
        );
      }
      else {
          this.setState({
              weatherObj: '',
              fiveDay: '',
              search: ''
          })
      }
    });
  };

  render() {
    return (
      <div>
        <input
          className="search"
          placeholder="Search by city..."
          type="text"
          onChange={this.handleChange}
          value={this.state.search}
        />
        <button onClick={() => this.getWeather()}>search</button>
        <h1>{this.state.weatherObj ? this.state.weatherObj.title : null}</h1>
        <div className="forecast">
          {this.state.weatherObj ? (
            this.state.fiveDay.map((el, i) => (
              <Weather key={el.id} el={el} weatherObj={this.state.weatherObj} />
            ))
          ) : (
            <h1 className='error'>City not found, check spelling or search for another city</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Forecast;
