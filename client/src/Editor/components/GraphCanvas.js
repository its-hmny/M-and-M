import React, { useContext, useCallback } from 'react';
import Graph from 'vis-network-react';
import { Options, Converter } from '../../data/GraphPreferences';
import EditorContext from '../context/EditorContext';
import { ActivitiesMenuButton } from './ActivitiesMenu';

import './styles.css';

const GraphCanvas = () => {
  const { story, saveStory, setWorkingActivity } = useContext(EditorContext);

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
  const deselectNode = useCallback(() => setWorkingActivity(undefined), [setWorkingActivity]);
  const dragEnd = useCallback(event => setWorkingActivity(event.nodes[0]), [setWorkingActivity]);

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
    <div>
      <ActivitiesMenuButton />

      <div onDrop={event => onDropAddNode(event)} onDragOver={event => event.preventDefault()}>
        <Graph
          data={Converter.getGraphFromStory(story)}
          options={Options}
          events={{ selectNode, deselectNode, dragEnd }}
          getNetwork={network => console.log(network)}
        />
      </div>
    </div>
  );
};

export default GraphCanvas;
