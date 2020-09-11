import React, { useContext } from 'react';
import Graph from 'vis-network-react';
import { Options, Converter } from '../constants/GraphPreferences';
import EditorContext from '../context/EditorContext'
import { ActivitiesMenuButton } from './ActivitiesMenu';

import './styles.css';


const GraphCanvas = () => {
  const { story, saveStory, setWorkingActivity } = useContext(EditorContext);

  const selectNode = event => setWorkingActivity(event.nodes[0]);
  const dragEnd = event => setWorkingActivity(event.nodes[0]);
  const deselectNode = event => setWorkingActivity(undefined);
  const onDropAddNode = event => {
    event.preventDefault();
    const newNode = JSON.parse(event.dataTransfer.getData("text"));
    const { nodes, ...others } = story;
    saveStory({ nodes: [...nodes, newNode], others});
  }
  
  return (
    <div>
      <ActivitiesMenuButton />

      <div onDrop={event => onDropAddNode(event)} onDragOver={event => event.preventDefault()} >
        <Graph 
          data={Converter.getGraphFromStory(story)} options={Options} 
          events={{ selectNode, deselectNode, dragEnd }} getNetwork={obj => console.log(obj)}
        />
      </div> 
    </div>
  );
};


export default GraphCanvas;