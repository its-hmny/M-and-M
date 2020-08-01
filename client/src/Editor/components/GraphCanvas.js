import React, { useContext, useState } from "react";
import Graph from "vis-network-react";
import {  IconButton, Paper, Collapse } from "@material-ui/core/"
import { Options, EventHandlers, additionalOptions, Utility, colorizeNodes } from "../constants/GraphPreferences";
import EditorContext from "../context/EditorContext"
import ActivitiesMenu from "./ActivitiesMenu";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  
  MenuButtonOpen: {
    borderRadius: 50,
    border: 0
  },

  MenuButtonClose: {
    border: 2,
    borderColor: "#e0e0e0",
    borderRadius: 50,
    borderStyle: "solid",
  },

  ActivityMenuContainerShow: {
    zIndex: 2,
    padding: 5,
    position: "absolute",
    border: 1,
    borderStyle: "solid",
    borderColor: "#e0e0e0",
  },

  ActivityMenuContainerHidden: {
    zIndex: 2,
    padding: 5,
    position: "absolute",  
  },

  GraphCanvasContainer: {
    marginTop: 20,
    height: 500,
    width: 500
  },
  
  graph: {}
});


const GraphCanvas = () => {
  const { story, setWorkingActivity } = useContext(EditorContext);
  const { converter } = Utility;
  const classes = useStyles();

  const [open,setOpen] = useState(false);
  const MenuClick = event => setOpen(!open);

  const selectNode = event => setWorkingActivity(event.nodes[0]);
  const deselectNode = event => setWorkingActivity(undefined);

  return (
    <div className={classes.GraphCanvasContainer}>
      <Paper className={open ? classes.ActivityMenuContainerShow : classes.ActivityMenuContainerHidden } elevation={open ? 5 : 0}>
        
        <IconButton className={open ? classes.MenuButtonOpen : classes.MenuButtonClose}onClick={MenuClick}>
          <MenuIcon />
        </IconButton>
        
        <Collapse in={open} >
         <ActivitiesMenu views={["View1","View2","View3","View4","View5"]}/>
        </Collapse>
        
      </Paper>

      <div className={classes.graph}>
        <Graph  data={colorizeNodes(converter.getGraphFromStory(story))} options={Options} events={{selectNode, deselectNode}} getNetwork={additionalOptions} />
      </div>
      
    </div>
  );
};

export default GraphCanvas;