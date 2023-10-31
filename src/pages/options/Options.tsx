import { Box, Button, Typography } from '@mui/material';
import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';
import React from 'react';

const Options: React.FC = () => {
  const theme = useStorage(exampleThemeStorage);
  return (
    <Box height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'}>
      <Typography variant="subtitle1" gutterBottom>
        Change this content in <code>./src/pages/options</code>
      </Typography>
      <Button variant="outlined" onClick={exampleThemeStorage.toggle}>
        Toggle theme: [{theme}]
      </Button>
    </Box>
  );
};

export default Options;
