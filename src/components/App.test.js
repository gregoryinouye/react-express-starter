import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders the App component', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  xit('matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
