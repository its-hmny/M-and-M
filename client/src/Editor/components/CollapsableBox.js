import React from 'react';
import { Box, List, ListItem, Typography, Collapse, makeStyles } from '@material-ui/core';
import DynamicLoadFragments from './EditorFragments';

const useStyles = makeStyles({
  InspectorElementStyle: {
    margin: 5,
    width: 270,
  },
});

/* Element in the inspector list, contains component name and the logic to expand and show
   the modifiable component properties in <DynamicLoadFragments> */
const CollapsableBox = props => {
  const { name, uuid, isOpen, handler, indentLevel, fieldsToSet, ...specificProps } = props;
  const { InspectorElementStyle } = useStyles();
  

  var ListComponent = fieldsToSet.length === 0 ? undefined : <List className={InspectorElementStyle}>
  <ListItem
    button={fieldsToSet.length !== 0}
    onClick={() => handler(uuid)}
    divider
  >
    <Typography variant="h6" component="h6">
      {name}
    </Typography>
  </ListItem>
  <Collapse in={isOpen[uuid]} unmountOnExit>
    <Box borderLeft={1} borderColor="primary.main">
      <DynamicLoadFragments fieldsToSet={fieldsToSet} {...specificProps} />
    </Box>
  </Collapse>
</List>

  /* If current component does not have modifiable fields the function will return a disabled listitem
     else the function will return a clickable listitem with a collapsable box */
  return (
    <Box className={InspectorElementStyle}>
      {ListComponent}
    </Box>
  );
};

export default CollapsableBox;
