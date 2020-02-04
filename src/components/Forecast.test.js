import React from 'react'
import Forecast from './Forecast'
import {shallow, configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Forecast/>', () => {
    it('renders 1 <Forecast/> component', () => {
        const component = shallow(<Forecast name="forecast"/>);
        expect(component).toHaveLength(1)
    })
    describe('it renders props correctly', () => {
        const component = shallow(<Forecast name="forecast"/>)
        expect(component.instance().props.name).toBe('forecast')
    })
})

describe("Should see Search Input", () => {
    it("Input should have placeholder Search by city...", () => {
      const land = shallow(<Forecast />);
      const input = land.find("input");
      expect(input.props()).toHaveProperty("placeholder", "Search by city...");
    });
  });

  describe("Search button",() => {
    it('display search button',() => {
        const land = shallow(<Forecast/>)
        const btn = land.find('button').at(0).text()
        expect(btn).toEqual("Search")

    })
})