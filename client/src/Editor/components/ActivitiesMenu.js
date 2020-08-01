import React from 'react';
import { Grid,  List, ListItem, ListItemText } from '@material-ui/core';

import shortid from 'shortid';




const  ActivitiesMenu = (props) => {
  let views = [];

  //Inserire codice per creare nodo sul grafo con relativi campi e aggiungerlo alla storia
  const addActivityToGraph = (views,e) => {
    console.log(views);
  };
  //Popolo la lista
  for(let i=0;i<props.views.length;i++){
    views.push(
        <ListItem button divider key={shortid.generate()}>
          <ListItemText primary={props.views[i]} onClick={(e) => addActivityToGraph(props.views[i],e)}></ListItemText>
        </ListItem>
      );
  }

  
  return (
    
      <List >
        {views}
      </List>
   
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
