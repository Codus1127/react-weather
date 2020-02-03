import React from 'react';

function Header() {
        return (
            <header>
                <h1>WTW </h1>
                <h2>Weather</h2>
                <img
                src={`https://www.metaweather.com/static/img/weather/png/64/lc.png`}
                alt="weather icon"
              />
            </header>
        );
    }

export default Header;