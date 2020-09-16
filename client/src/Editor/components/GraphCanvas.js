import React, { useContext } from 'react';
import Graph from 'vis-network-react';
import { Options, Converter } from '../../data/GraphPreferences';
import EditorContext from '../context/EditorContext';
import { ActivitiesMenuButton } from './ActivitiesMenu';

import './styles.css';

const GraphCanvas = () => {
  const { story, saveStory, setWorkingActivity } = useContext(EditorContext);

  const selectNode = event => {
    let node = event.nodes[0];
    story.nodes[node] = { ...story.nodes[node] };

    setWorkingActivity(node);
  };
  const deselectNode = () => setWorkingActivity(undefined);
  const dragEnd = event => setWorkingActivity(event.nodes[0]);

  const onDropAddNode = event => {
    event.preventDefault();
    try {
      const newNode = JSON.parse(event.dataTransfer.getData('text'));
      const { nodes, ...others } = story;
      saveStory({ nodes: [...nodes, newNode], others });
    } catch (Error) {
      return;
    }
  };

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
