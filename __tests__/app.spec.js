import React from 'react';
import { shallow } from 'enzyme';

import App from '../app/index';

describe('<App />', () => {
  test('it should render correctly to page', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).to.equal(1);
  })
})