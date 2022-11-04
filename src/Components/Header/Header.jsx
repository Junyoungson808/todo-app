import { createStyles, Header, Navbar, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import Login from '../Login';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[1],
  },
  link: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
  },
}));

const AppHeader = ({ incomplete }) => {
  const { classes } = useStyles();

  return (
    <Header id="header-main">
      <Navbar className={classes.navbar}>
        <Group position="apart">
          <Group>
            <Link className={classes.link} to="/">Home</Link>
            <Link className={classes.link} to="/settings">Settings</Link>
          </Group>
          <Login />
        </Group>
      </Navbar>
    </Header>
  )
}

export default AppHeader;