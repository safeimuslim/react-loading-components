import React from 'react';
import { shallow } from 'enzyme';

import Audio from '../src/Components/Audio';

describe('Test <Audio />', () => {
  it('renders without crashing', () => {
    shallow(<Audio />);
  });
});