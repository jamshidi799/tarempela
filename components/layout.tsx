import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react';
import styles from './layout.module.scss';
import Header from './common/header';
import Navbar from './common/navbar';
import Footer from './common/footer';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, isCantanier }) {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? 'dark' : 'light';
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
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
      <ThemeProvider theme={darkTheme}>
        <Navbar handleThemeChange={handleThemeChange} isDark={darkState} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
