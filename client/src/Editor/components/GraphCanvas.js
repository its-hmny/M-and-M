import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Graph from 'vis-network-react';
import { Options, Utility } from '../constants/GraphPreferences';
import EditorContext from '../context/EditorContext'
import { ActivitiesMenuButton } from './ActivitiesMenu';


const useStyles = makeStyles({
  
  GraphCanvasContainer: {
    marginTop: 20,
    height: 500,
    width: 500
  },
  
});


const GraphCanvas = () => {
  const { story, setWorkingActivity } = useContext(EditorContext);
  const { converter } = Utility;
  const classes = useStyles();

  const selectNode = event => setWorkingActivity(event.nodes[0]);
  const deselectNode = event => setWorkingActivity(undefined);
  
  return (
    <div className={classes.GraphCanvasContainer} >
      <ActivitiesMenuButton />
      <div className={classes.graph}>
        <Graph 
          data={converter.getGraphFromStory(story)} options={Options} 
          events={{selectNode, deselectNode}} getNetwork={obj => console.log(obj)}
        />
      </div> 
    </div>
  );
};


export default GraphCanvas;