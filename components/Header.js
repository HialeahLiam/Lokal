import Link from 'next/link';
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import { AppBar, Button, Box } from '@mui/material';

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position='static'>
      <Toolbar>
        <Button color='inherit'>
          Login
        </Button>
        <Button color='inherit'>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;