import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('To be in the doc', () => {
  test('Test', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
