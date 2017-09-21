import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import SimpleForm from '../components/SimpleForm';

const wrapper = shallow(<App />);
const component = shallow(<SimpleForm />);

// TODO: use mount for more advanced testing and set-up

describe('Component: SimpleForm', () => {
  it('should render three labels', () => {
    expect(component.find('label')).to.have.length(3);
  });
});