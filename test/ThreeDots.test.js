import React from 'react';
import { shallow } from 'enzyme';

import ThreeDots from '../src/Components/ThreeDots';

describe('Test <ThreeDots />', () => {
  it('renders without crashing', () => {
    shallow(<ThreeDots />);
  });
});