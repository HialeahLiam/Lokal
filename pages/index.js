import { Typography } from '@mui/material';
import Button from '@mui/material/Button'
import { Box } from '@mui/system';
import Head from 'next/Head';

const Index = () => {
    return (
      <div style={{ padding: '10px 45px'}}>
      <Head>
        <title>Index page</title>
        <meta name="description" content="This is the description of the Index page" />
      </Head>
      <Typography>Index page content</Typography>
      <p>paragraph</p>
      <Button variant='contained' >MUI Button</Button>
    </div>
    )
} 

export default Index;
