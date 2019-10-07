import React from 'react';
import { shallow } from 'enzyme';

import Hearts from '../src/Components/Hearts';

describe('Test <Hearts />', () => {
  it('renders without crashing', () => {
    shallow(<Hearts />);
  });
});