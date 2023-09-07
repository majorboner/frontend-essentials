import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { ReactNode } from 'react';

interface ThemeDecoratorProps {
  theme: Theme;
  children: ReactNode;
}

export const ThemeDecorator = (props: ThemeDecoratorProps) => {
  const { theme, children } = props;
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        {children}
      </div>
    </ThemeProvider>
  );
};
