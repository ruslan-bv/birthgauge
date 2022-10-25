import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Main:React.FC = () => {
    return (
        <Box
          sx={{
            width: "100%",
            maxWidth: 600,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography variant="h2">THE BIRTH GAUGE</Typography>
          <Button 
            variant="contained" 
            color="success"
            component={RouterLink}
            to='/graph'
            sx={{ marginTop: '20px' }}>
              Enter To Proceed
            </Button>
        </Box>
      );
}