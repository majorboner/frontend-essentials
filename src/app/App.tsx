import 'app/styles/index.scss';
import 'app/styles/reset.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', { disabled: false }, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
