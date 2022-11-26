import React from 'react'
import { makeStyles } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));
export default function App() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <h1>ramal</h1>
        <CssBaseline />
        <Header />
        <PlaceToVisit />
      </div>
    );
  }
  







