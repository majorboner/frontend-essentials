import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';

describe('Sidebar tests', () => {
  test('Рендерится', async () => {
    render(<BrowserRouter><Sidebar /></BrowserRouter>);
    expect(screen.getByTestId('sidebar-testid')).toBeInTheDocument();
  });
  test('Закрывается и открывается', async () => {
    render(<BrowserRouter><Sidebar /></BrowserRouter>);
    expect(screen.getByTestId('sidebar-testid')).not.toHaveClass('collapsed');
    fireEvent.click(screen.getByTestId('sidebar-switcher'));
    expect(screen.getByTestId('sidebar-testid')).toHaveClass('collapsed');
    fireEvent.click(screen.getByTestId('sidebar-switcher'));
    expect(screen.getByTestId('sidebar-testid')).not.toHaveClass('collapsed');
  });
});
