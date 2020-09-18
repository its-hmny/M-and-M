import React from 'react';
import { Box, List, ListItem, Typography, Collapse, Divider, makeStyles } from '@material-ui/core';
import DynamicLoadFragments from './EditorFragments';

const useStyles = makeStyles({
  InspectorElementStyle: {
    margin: 5,
    width: 270,
  },
});

const CollapsableBox = props => {
  const { name, uuid, isOpen, handler, children, indentLevel, ...specificProps } = props;
  const { InspectorElementStyle } = useStyles();
  const marginLeft = indentLevel * 15 || undefined;

  return (
    <Box className={InspectorElementStyle}>
      <List className={InspectorElementStyle}>
        <ListItem button onClick={() => handler(uuid)}>
          <Typography style={{ marginLeft }} variant="h5" component="h5">
            {name}
          </Typography>
        </ListItem>
        <Collapse in={isOpen[uuid]} unmountOnExit>
          <Box borderLeft={1} borderColor="primary.main">
            <DynamicLoadFragments {...specificProps} />
            {children}
          </Box>
        </Collapse>
      </List>
      <Divider />
    </Box>
  );
};

export default CollapsableBox;
