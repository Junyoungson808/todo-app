import { createStyles, Header, Navbar, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[1],
    display: 'inline-flex',
  },
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[1],
    width: '80%',
    margin: 'auto',
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.lg,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  }
}));

const AppHeader = ({ incomplete }) => {
  const { classes } = useStyles();

  return (
      <Header id="header-main">
        <Navbar className={classes.navbar}>
          <Text to="/" className='nav-link' >Home</Text>               
          <Text to="/settings" className='nav-link' >Settings</Text>          
        </Navbar>
        <h1 className={classes.h1}>To Do List: {incomplete} items pending</h1>
      </Header>
  )
}

export default AppHeader;