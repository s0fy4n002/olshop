import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
  Link,
} from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

export default function Login() {
  const classes = useStyles();
  return (
    <Layout title="Login">
      <form className={classes.form}>
        <Typography variant="h1" component="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="email"
              inputProps={{ type: 'email' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="password"
              inputProps={{ type: 'password' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Dont have account &nbsp;
            <NextLink href="/register" passHref>
              <Link> Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
