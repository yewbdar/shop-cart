import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';

describe('Tooltip component', () => {
  it('renders the tooltip with correct props', () => {
    const wrapper = shallow(
      <Tooltip
        ariaLabel="Test Tooltip"
        direction="bottom"
        variant="default"
        addClasses="custom-class"
      >
        <span>Tooltip Content</span>
      </Tooltip>
    );

    expect(wrapper.exists('[data-testid="Tooltip"]')).toBe(true);
    expect(wrapper.prop('ariaLabel')).toBe('Test Tooltip');
    expect(wrapper.prop('direction')).toBe('bottom');
    expect(wrapper.prop('variant')).toBe('default');
    expect(wrapper.prop('addClasses')).toBe('custom-class');
    expect(wrapper.find('span').text()).toBe('Tooltip Content');
  });
});



