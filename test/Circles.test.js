import React from 'react';
import { shallow } from 'enzyme';

import Circles from '../src/Components/Circles';

describe('Test <Circles />', () => {
  it('renders without crashing', () => {
    shallow(<Circles />);
  });
});