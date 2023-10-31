import React from 'react';
import logo from '@assets/img/logo.svg';
import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { Box, Button, Typography } from '@mui/material';

const Newtab = () => {
  const theme = useStorage(exampleThemeStorage);

  return (
    <Box height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'}>
      <Typography variant="subtitle1" gutterBottom>
        Change this content in <code>./src/pages/panel</code>
      </Typography>
      <Button variant="outlined" onClick={exampleThemeStorage.toggle}>
        Toggle theme: [{theme}]
      </Button>
    </Box>
  );
};

export default withErrorBoundary(withSuspense(Newtab, <div> Loading ... </div>), <div> Error Occur </div>);
