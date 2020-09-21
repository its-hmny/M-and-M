import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as Elements from '../common/Elements';
import View from '../common/View';

import { fakeStories } from './constants';

const fakeFetch = async storyId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fakeStories[storyId]);
    }, 500);
  });
};

const useQuery = () => Object.fromEntries(new URLSearchParams(useLocation().search));

// `Story` param is an object that stores properties needed for computing
// storyProps for this specific component
const createStoryProps = (componentName, props, story) => {
  switch (componentName) {
    case 'Button':
      // Button has 1 story related prop: onClick
      return {
        onClick: () => story.moveTo(props.nextNode),
      };
    default:
      throw new Error(`Cannot compute story props for ${componentName} because this component does not exist.`);
  }
};

function Player() {
  const { storyId } = useQuery();
  const [story, setStory] = useState(null);
  const [currentNodeId, setCurrentNodeId] = useState(null);
  const [viewContent, setViewContent] = useState(null);

  const storyContext = useMemo(
    () => ({
      moveTo: node => setCurrentNodeId(node),
    }),
    []
  );

  const [status, setStatus] = useState('LOADING');

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const storyJson = await fakeFetch(storyId);
        setStory(storyJson);
        setCurrentNodeId(storyJson.nodes[0].id);
        setStatus('SUCCESS');
      } catch (err) {
        console.error(`An error occured while loading story ${storyId}: ${err}`);
        setStatus('FAILURE');
      }
    };

    fetchStory();
  }, [storyId]);

  useEffect(() => {
    // if (currentNodeId) is insufficient because 0 means false -.-
    // Stupid JS! I miss you Option<T>...sigh
    if (currentNodeId != null) {
      const { components } = story.nodes.find(node => node.id === currentNodeId);

      const content = components.map(component => {
        const { id, name, story, ...rest } = component;
        const storyProps = story ? createStoryProps(name, story, storyContext) : {};
        const props = { ...storyProps, ...rest };
        const Element = Elements[name];
        return <Element key={id} {...props} />;
      });

      setViewContent(content);
    }
  }, [currentNodeId, story, storyContext]);

  if (status === 'LOADING') {
    return <p>Loading story...</p>;
  }

  if (status === 'FAILURE') {
    return <p>An error occured while loading story. Try refresh page.</p>;
  }

  return <View>{viewContent}</View>;
}

export default Player;
