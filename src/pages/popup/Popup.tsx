import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

const Popup = () => {
  const theme = useStorage(exampleThemeStorage);
  return (
    <Box
      height={300}
      width={300}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      textAlign={'center'}>
      <Typography variant="subtitle1" gutterBottom>
        Change this content in <code>./src/pages/popup</code>
      </Typography>
      <Button variant="outlined" onClick={exampleThemeStorage.toggle}>
        Toggle theme: [{theme}]
      </Button>
    </Box>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
