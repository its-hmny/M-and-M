import React from '../../web_modules/react.js';
import { useHistory, useLocation } from '../../web_modules/react-router-dom.js';
import { Typography } from '../../web_modules/@material-ui/core.js';
import { EditorProvider } from './context/EditorContext.js';
import axios, { useQuery } from '../common/shared.js';
import * as ROUTES from '../routes.js';

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
    return React.createElement(Typography, null, 'Loading...');
  }

  return React.createElement(
    EditorProvider,
    {
      userStory: story,
    },
    children,
  );
};

export default Providers;
