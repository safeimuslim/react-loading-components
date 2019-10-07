import React from 'react';
import { shallow } from 'enzyme';

import Puff from '../src/Components/Puff';

describe('Test <Puff />', () => {
  it('renders without crashing', () => {
    shallow(<Puff />);
  });
});