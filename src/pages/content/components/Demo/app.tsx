import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import withErrorBoundary from '@root/src/shared/hoc/withErrorBoundary';
import withSuspense from '@root/src/shared/hoc/withSuspense';
import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';
import { useEffect } from 'react';

function App() {
  const theme = useStorage(exampleThemeStorage);
  useEffect(() => {
    console.log('content view loaded');
  }, []);

  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'}>
      <Typography variant="subtitle1" gutterBottom>
        Change this content in <code>./src/pages/content</code>
      </Typography>
      <Button variant="outlined" onClick={exampleThemeStorage.toggle}>
        Toggle theme: [{theme}]
      </Button>
    </Box>
  );
}

export default withErrorBoundary(withSuspense(App, <div> Loading ... </div>), <div> Error Occur </div>);
