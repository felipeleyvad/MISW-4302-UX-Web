import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {

  const appBarStyle = {
    backgroundColor: '#12355B', // Reemplaza esto con tu código hexadecimal deseado
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
        <Typography variant="h6">No me olvides app</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
