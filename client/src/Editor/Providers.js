import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { EditorProvider } from './context/EditorContext';
import axios, { useQuery } from '../common/shared';
import * as ROUTES from '../routes';

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
          setStory(newStory);
          setLoadedStory(true);
        } else {
          setLoadedStory(true);
        }
      } catch (err) {
        console.error(err);
        history.push(ROUTES.NOTFOUND);
      }
    };

    fetchStory();
  }, [storyId, history, location]);

  if (!loadedStory) {
    return <Typography>Loading...</Typography>;
  }

  return <EditorProvider userStory={story}>{children}</EditorProvider>;
};

export default Providers;
