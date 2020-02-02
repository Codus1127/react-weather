import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fahrenheit: "",
      maxTemp: "",
      minTemp: "",
      uri: "",
      icon: ""
    };
  }

  componentDidMount = () => {
    this.convertToFahren();
    this.setBackground();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.uri !== this.state.uri) {
      this.setBackground();
      console.log(this.state.uri);
    }
  }

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
    // console.log(weather)
    const weather = this.props.el.weather_state_name;
    console.log(weather);
    if (weather === "Clouds") {
      this.setState({
        uri: "http://getwallpapers.com/wallpaper/full/4/f/4/564402.jpg"
      });
    } else if (weather === "Light Rain") {
      this.setState({
        uri: "http://getwallpapers.com/wallpaper/full/4/f/4/564402.jpg"
      });
    } else if (weather === "Hail") {
      this.setState({
        uri: "http://getwallpapers.com/wallpaper/full/4/f/4/564402.jpg"
      });
    } else if (weather === "Showers") {
      this.setState({
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1ea8pphOIO_SWsG9Tiu0JNIxEKW5FbeAvL3geC1rRTJjkjkfD"
      
        });
    } else if (weather === "Snow") {
      this.setState({
        uri:
          "https://ak4.picdn.net/shutterstock/videos/1805984/thumb/1.jpg"
      });
    } else if (weather === "Clouds") {
      this.setState({
        uri:
          "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      });
    } else if (weather === "Clear") {
      this.setState({
        uri:
          "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      });
    } else {
      this.setState({
        uri:
          "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      });
    }
  };

  render() {
    const { el } = this.props;
    const { fahrenheit, maxTemp, minTemp } = this.state;
    return (
      <>
        {this.state.uri ? (
          <div
            className="oneDay"
            style={{
              backgroundImage: `url(${this.state.uri})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%"
            }}
          >
            <p>{el.applicable_date}</p>
            <p>{el.weather_state_name}</p>
            {this.state.icon ? <img src={this.state.icon} alt="weather icon"/> : null}
            <h2>{fahrenheit + "°"}</h2>
            <div className="highLow">
              <p>{"Low " + minTemp + "° / "}</p>
              <p>{maxTemp + "° High"}</p>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Weather;
