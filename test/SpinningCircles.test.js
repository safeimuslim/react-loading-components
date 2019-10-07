import React from 'react';
import { shallow } from 'enzyme';

import SpinningCircles from '../src/Components/SpinningCircles';

describe('Test <SpinningCircles />', () => {
  it('renders without crashing', () => {
    shallow(<SpinningCircles />);
  });
});