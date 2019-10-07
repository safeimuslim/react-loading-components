import React from 'react';
import { shallow } from 'enzyme';

import BallTriangle from '../src/Components/BallTriangle';

describe('Test <BallTriangle />', () => {
  it('renders without crashing', () => {
    shallow(<BallTriangle />);
  });
});