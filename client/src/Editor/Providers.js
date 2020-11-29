import React from 'react';
import { orange, pink } from '@material-ui/core/colors';
import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@material-ui/core';

import { EditorProvider } from './context/EditorContext';
import ExampleStory from './constants/ExampleStory';
import axios, { useQuery } from '../common/shared';

const customTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: pink,
    secondary: orange,
  },
});

const Providers = ({ children }) => {
  const { storyId } = useQuery();

  const [story, setStory] = React.useState(ExampleStory);
  const [loadedStory, setLoadedStory] = React.useState(false);

  React.useEffect(() => {
    const fetchStory = async () => {
      try {
        if (storyId !== undefined) {
          const res = await axios.get(`stories/${storyId}`);
          const newStory = res.data.payload;
          console.log(newStory);
          setStory(newStory);
          setLoadedStory(true);
        } else {
          setLoadedStory(true);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchStory();
  }, [storyId]);

  return (
    <ThemeProvider theme={customTheme}>
      {loadedStory ? (
        <div>
          <CssBaseline />
          <EditorProvider userStory={story}>{children}</EditorProvider>
        </div>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </ThemeProvider>
  );
};

export default Providers;
