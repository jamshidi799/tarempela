import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState, useMemo } from 'react';
import styles from './layout.module.scss';
import Header from './common/header';
import Navbar from './common/navbar';
import Footer from './common/footer';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, isCantanier }) {
  const [darkState, setDarkState] = useState(true);
  const theme = createMuiTheme({
    palette: {
      type: darkState ? 'dark' : 'light',
      primary: {
        main: '#2e7d32',
      },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  return (
    <div className={isCantanier ? 'container' : ''}>
      <Header />
      <ThemeProvider theme={theme}>
        <Navbar handleThemeChange={handleThemeChange} isDark={darkState} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
