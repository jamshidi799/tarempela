import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Link from 'next/link';
import React from 'react';
import style from './navbar.module.scss';
import { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'black',
    },
  })
);

export default function Navbar({ handleThemeChange, isDark }) {
  const classes = useStyles();

  useEffect(() => {
    console.log(isDark);
  }, []);

  return (
    <div className={style.navbar}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar color="inherit" className={classes.root}>
          <Toolbar>
            <Link href="/blog" passHref>
              <a className={style.nav_item}>بلاگ</a>
            </Link>
            <Link href="/" passHref>
              <a className={style.nav_item}>خانه</a>
            </Link>
            <Link href="/aboutUs" passHref>
              <a className={style.nav_item}>درباره طارم‌پلا</a>
            </Link>

            {/* <span className={style.nav_item}>{isDark ? 'تاریک' : 'روشن'}</span>
            <Switch checked={isDark} onChange={handleThemeChange} color="primary" /> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
}
