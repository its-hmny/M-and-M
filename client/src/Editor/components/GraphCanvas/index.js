import React, { useCallback, useRef } from 'react';
import Graph from 'vis-network-react';

import { Options, getGraphFromStory } from './GraphPreferences';
import { useEditor } from '../../context/EditorContext';

import './styles.css';

const GraphCanvas = () => {
  const networkRef = useRef();
  const { story, saveStory, setWorkingActivity } = useEditor();

  /* Memoization of events to avoid processing multiple calls because of rerenders */
  const selectNode = useCallback(
    event => {
      const eventNode = event.nodes[0];
      const pos = story.nodes.findIndex(node => node.id === eventNode);
      story.nodes[pos] = { ...story.nodes[pos] };
      setWorkingActivity(eventNode);
    },
    [setWorkingActivity, story.nodes]
  );

  const doubleClick = useCallback(() => networkRef.current.addEdgeMode(), [networkRef]);

  const deselectNode = useCallback(() => {
    networkRef.current.disableEditMode();
    setWorkingActivity(undefined);
  }, [setWorkingActivity]);

  const dragEnd = useCallback(event => setWorkingActivity(event.nodes[0]), [
    setWorkingActivity,
  ]);

  const onDropAddNode = useCallback(
    event => {
      event.preventDefault();
      try {
        const newNode = JSON.parse(event.dataTransfer.getData('text'));
        const { nodes, ...others } = story;
        saveStory({ nodes: [...nodes, newNode], ...others });
      } catch (Error) {
        return;
      }
    },
    [saveStory, story]
  );

  return (
    <div
      onDrop={event => onDropAddNode(event)}
      onDragOver={event => event.preventDefault()}
    >
      <Graph
        data={getGraphFromStory(story)}
        options={Options}
        events={{ doubleClick, selectNode, deselectNode, dragEnd }}
        getNetwork={network => (networkRef.current = network)}
      />
    </div>
  );
};

export default GraphCanvas;
