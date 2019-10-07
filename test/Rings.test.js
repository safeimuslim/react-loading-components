import React from 'react';
import { shallow } from 'enzyme';

import Rings from '../src/Components/Rings';

describe('Test <Rings />', () => {
  it('renders without crashing', () => {
    shallow(<Rings />);
  });
});