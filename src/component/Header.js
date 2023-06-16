import React from 'react';
import { render } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('Tooltip component', () => {
  it('renders the tooltip with correct props', () => {
    const { getByTestId } = render(
      <Tooltip
        ariaLabel="Test Tooltip"
        direction="bottom"
        variant="default"
        addClasses="custom-class"
      >
        <span>Tooltip Content</span>
      </Tooltip>
    );

    const tooltip = getByTestId('Tooltip');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveAttribute('ariaLabel', 'Test Tooltip');
    expect(tooltip).toHaveAttribute('direction', 'bottom');
    expect(tooltip).toHaveAttribute('variant', 'default');
    expect(tooltip).toHaveAttribute('addClasses', 'custom-class');
  });
});


