import React from 'react';
import { Grid,  List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import shortid from 'shortid';

const useStyles = makeStyles({
  list: {
    marginTop: 20,
    padding: 5,
    border: 1,
    borderStyle: "solid",
    borderColor: "#e0e0e0"
  }
});


const  ActivitiesMenu = (props) => {
  let widgets = [];

  //Inserire codice per creare nodo sul grafo con relativi campi e aggiungerlo alla storia
  const addActivityToGraph = (widget,e) => {
    console.log(widget);
  };
  //Popolo la lista
  for(let i=0;i<props.widgets.length;i++){
    widgets.push(
        <ListItem button divider key={shortid.generate()}>
          <ListItemText primary={props.widgets[i]} onClick={(e) => addActivityToGraph(props.widgets[i],e)}></ListItemText>
        </ListItem>
      );
  }
  
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <List className={classes.list}>
        {widgets}
      </List>
    </Grid>
  );
}

export default ActivitiesMenu;




/* EXPERIMENTAL
<Button onClick={() => setOpen(true)}>Choose new activity</Button>
      <SwipeableDrawer
        anchor={"left"}
        open={isOpen}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        {[<h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>]}
      </SwipeableDrawer>
*/
