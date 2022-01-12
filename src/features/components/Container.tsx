import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactElement } from 'react';

const SimpleContainer = (): ReactElement => {

        return <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
    </Container>;
}
  export default SimpleContainer;
