import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { orange, pink } from '@material-ui/core/colors';
import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@material-ui/core';

import { EditorProvider } from './context/EditorContext';
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
  const location = useLocation();
  const history = useHistory();

  const [story, setStory] = React.useState();
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
        history.push(`/not-found?route=${location.pathname}${location.search}`);
      }
    };

    fetchStory();
  }, [storyId, history, location]);

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
