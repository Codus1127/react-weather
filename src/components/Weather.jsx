import React, { Component } from "react";
import Axios from "axios";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fahrenheit: "",
      maxTemp: "",
      minTemp: "",
      url: ""
    };
  }

  componentDidMount = () => {
    this.convertToFahren();
    this.setBackground();
    this.getWeatherIcon();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      this.setBackground();
      this.getWeatherIcon();
    }
  }

  getWeatherIcon = async () => {
    const icon = this.props.el.weather_state_abbr;
    await Axios.get(
      `https://www.metaweather.com/static/img/weather/png/64/${icon}.png`
    ).then(res => this.setState({ icon: res.data }));
  };

  convertToFahren = () => {
    let fahrenheit = Math.floor(this.props.el.the_temp * (9 / 5) + 32);
    let maxTemp = Math.floor(this.props.el.max_temp * (9 / 5) + 32);
    let minTemp = Math.floor(this.props.el.min_temp * (9 / 5) + 32);
    this.setState({
      fahrenheit,
      maxTemp,
      minTemp
    });
  };

  setBackground = () => {
    const weather = this.props.el.weather_state_name;
    if (weather === "Light Cloud") {
      this.setState({
        url:
          "https://image.made-in-china.com/2f0j00prkRbFwtCycf/Blue-Sky-White-Clouds-LED-Light-Panel-for-Indoor-Design.jpg"
      });
    } else if (weather === "Light Rain") {
      this.setState({
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1ea8pphOIO_SWsG9Tiu0JNIxEKW5FbeAvL3geC1rRTJjkjkfD"
      });
    } else if (weather === "Heavy Rain") {
      this.setState({
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1ea8pphOIO_SWsG9Tiu0JNIxEKW5FbeAvL3geC1rRTJjkjkfD"
      });
    } else if (weather === "Hail") {
      this.setState({
        url:
          "https://i.pinimg.com/originals/c4/d0/fe/c4d0feccf123e945c0a79f4612247ca7.jpg"
      });
    } else if (weather === "Showers") {
      this.setState({
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1ea8pphOIO_SWsG9Tiu0JNIxEKW5FbeAvL3geC1rRTJjkjkfD"
      });
    } else if (weather === "Snow") {
      this.setState({
        url: "https://ak4.picdn.net/shutterstock/videos/1805984/thumb/1.jpg"
      });
    } else if (weather === "Heavy Cloud") {
      this.setState({
        url: "http://getwallpapers.com/wallpaper/full/4/f/4/564402.jpg"
      });
    } else if (weather === "Clear") {
      this.setState({
        url:
          "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      });
    } else {
      this.setState({
        url:
          "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      });
    }
  };

  render() {
    const { el } = this.props;
    const { fahrenheit, maxTemp, minTemp } = this.state;
    return (
      <>
        {this.state.url ? (
          <div
            className="oneDay"
            style={{
              backgroundImage: `url(${this.state.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "220px",
              borderRadius: "7px",
              margin: "5px"
            }}
          >
            <div className="container">
              <p className="date">{el.applicable_date}</p>
              <p>{el.weather_state_name}</p>
              <img
                src={`https://www.metaweather.com/static/img/weather/png/64/${el.weather_state_abbr}.png`}
                alt="weather icon"
              />
              <h2>{fahrenheit + "°"}</h2>
              <div className="highLow">
                <p>{"Low " + minTemp + "° /" }</p>
                <p>{maxTemp + "° High"}</p>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Weather;
