import React from 'react';
import { createStyles, Header as Mheader } from '@mantine/core';
// import './header.scss';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.teal[9],
    borderRadius: theme.radius.sm,
  },
}));

const Header = () => {
  const { classes } = useStyles();

    return(
    <>
    <Mheader className={classes.header} id="header-main">
      <h1>Home</h1>
    </Mheader>
    </>
  )
}

export default Header;