import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { ReactNode } from 'react';

interface ThemeDecoratorProps {
  theme: Theme;
  children: ReactNode;
}

const ThemeDecoratorStyle = {
  minWidth: '100%',
  height: '100%',
};

export const ThemeDecorator = (props: ThemeDecoratorProps) => {
  const { theme, children } = props;
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`} style={ThemeDecoratorStyle}>
        {children}
      </div>
    </ThemeProvider>
  );
};
