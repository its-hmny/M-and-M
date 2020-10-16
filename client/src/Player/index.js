import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import * as Elements from '../common/Elements';
import View from '../common/View';
import Chat from './components/Chat';

const useQuery = () => Object.fromEntries(new URLSearchParams(useLocation().search));

// `Story` param is an object that stores properties needed for computing
// storyProps for this specific component
const createStoryProps = (component, storyContext) => {
  const { name, story: storyProps, ...props } = component;

  switch (name) {
    case 'Button':
      // Button has 1 story related prop: onClick
      return {
        onClick: () => storyContext.moveTo(storyProps.nextNode),
      };
    case 'Choices':
      return {
        onSubmit: answer => {
          const nextNode = storyProps.nextNode[answer];
          storyContext.moveTo(nextNode);
        },
      };
    default:
      throw new Error(`Cannot compute story props for ${name} because this component does not exist.`);
  }
};

const buildViewContent = (components, storyContext) =>
  components.map(component => {
    const { story, children, ...rest } = component;
    const storyProps = story ? createStoryProps(component, storyContext) : {};
    // compound components must keep their "atoms" in children prop, or we can't
    // know what to load (i.e. what is a prop and what is a renderable component)
    const props = { ...storyProps, ...rest, children: children && buildViewContent(children, storyContext) };
    const Element = Elements[component.name];
    return <Element key={component.id} {...props} />;
  });

const Player = () => {
  const { storyId } = useQuery();
  const [story, setStory] = useState(null);
  const [status, setStatus] = useState('LOADING');
  const [viewContent, setViewContent] = useState(null);
  const [currentNodeId, setCurrentNodeId] = useState(null);

  const storyContext = useMemo(
    () => ({
      currentNodeId,
      moveTo: node => setCurrentNodeId(node),
    }),
    []
  );

  useEffect(() => {
    axios
      .get(`http://localhost:8000/stories/${storyId}`)
      .then(resp => {
        const newStory = resp.data.payload;
        setStory(newStory);
        setCurrentNodeId(newStory.nodes[0].id);
        setStatus('SUCCESS');
      })
      .catch(_ => setStatus('FAILURE'));
  }, [storyId]);

  useEffect(() => {
    // if (currentNodeId) is insufficient because 0 means false -.-
    // Stupid JS! I miss you Option<T>...sigh
    if (currentNodeId != null) {
      const { components } = story.nodes.find(node => node.id === currentNodeId);
      const content = buildViewContent(components, storyContext);
      setViewContent(content);
    }
  }, [currentNodeId, story, storyContext]);

  if (status === 'LOADING') {
    return <p>Loading story...</p>;
  }

  if (status === 'FAILURE') {
    return <p>An error occured while loading story. Try refresh page.</p>;
  }

  return (
    <>
      <View>{viewContent}</View>
      <Chat />
    </>
  );
};

export default Player;
