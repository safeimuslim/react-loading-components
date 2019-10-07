import React from 'react';
import { shallow } from 'enzyme';

import Oval from '../src/Components/Oval';

describe('Test <Oval />', () => {
  it('renders without crashing', () => {
    shallow(<Oval />);
  });
});