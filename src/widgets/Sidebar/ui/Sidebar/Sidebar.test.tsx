import {
  fireEvent, getByTestId, render, screen,
} from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { Sidebar } from './Sidebar';

describe('To be in the doc', () => {
  test('Test', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('test toggle', () => {
    render(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-switcher');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    // fireEvent.click(toggleBtn);
  });
});
