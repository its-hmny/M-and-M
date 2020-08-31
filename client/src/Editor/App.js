import React from 'react';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';
import Editor from './Editor';

const App = () => {
  const customTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: pink,
      secondary: blue,
    }
  });

  return (
    <div className="App" style={undefined}>
      <ThemeProvider theme={customTheme}>
        <Editor />
      </ThemeProvider>
    </div>
  );
}

export default App;