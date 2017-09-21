import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';

describe('Component: App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders h1', () => {
    const wrapper = shallow(<App />);
    const h1 = <h1>Simple Form</h1>;
    expect(wrapper.contains(h1)).toEqual(true);
  });
});
