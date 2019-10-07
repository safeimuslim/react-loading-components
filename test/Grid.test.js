import React from 'react';
import { shallow } from 'enzyme';

import Grid from '../src/Components/Grid';

describe('Test <Grid />', () => {
  it('renders without crashing', () => {
    shallow(<Grid />);
  });
});