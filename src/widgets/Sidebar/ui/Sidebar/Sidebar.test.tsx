import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('To be in the doc', () => {
  test('Test', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
