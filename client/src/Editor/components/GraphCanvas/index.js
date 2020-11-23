import React, { useCallback, useRef, useState, useMemo, useEffect } from 'react';
import Graph from './Graph';

import {
  Options,
  getGraphFromStory,
  makeClusters,
  openClusters,
  cleanClusterEdges,
} from './GraphPreferences';
import { useEditor } from '../../context/EditorContext';

import './styles.css';

const clusterFactor = 0.9;

const GraphCanvas = () => {
  //Reference of Graph component from react-vis-network
  const networkRef = useRef();

  //Basis for zoom comparation
  const [lastClusterZoomLevel, setLastClusterZoomLevel] = useState(1);

  const [clusteredMissions, setClusteredMissions] = useState([]);
  //How much zoom is needed, relative to lastClusterZoomLevel, for clustering
  const { story, saveStory, setWorkingActivity } = useEditor();

  const nodeExists = nodeId => {
    var res = false;
    networkRef.current.body.data.nodes.forEach(node => {
      if (node.id === nodeId) res = true;
    });

    return res;
  };

  /* Memoization of events to avoid processing multiple calls because of rerenders */

  const doubleClick = useCallback(
    event => {
      const eventNode = event.nodes[0];
      //If node is cluster open the cluster else setWorkingActivity to node
      if (
        clusteredMissions.includes(eventNode) &&
        networkRef.current.isCluster(eventNode)
      ) {
        networkRef.current.openCluster(eventNode, {
          releaseFunction: (clusterPosition, containedNodesPositions) => {
            return containedNodesPositions;
          },
        });
        //Remove from clusteredMissions
        clusteredMissions.splice(clusteredMissions.indexOf(eventNode), 1);
      } else {
        //Check if node is a story node, if it is continue else it means it's a cluster
        if (nodeExists(eventNode)) {
          const pos = story.nodes.findIndex(node => node.id === eventNode);
          story.nodes[pos] = { ...story.nodes[pos] };
          setWorkingActivity(eventNode);
        }
      }
    },
    [setWorkingActivity, story.nodes, clusteredMissions]
  );

  useEffect(() => {
    setLastClusterZoomLevel(networkRef.current.view.targetScale);
  }, [lastClusterZoomLevel]);

  /*
    event: {
      direction: '+'/'-',
      scale: Number,
      pointer: {x:pointer_x, y:pointer_y}
    }
  */
  const zoom = useCallback(
    event => {
      //Zooming out

      if (event.direction === '-') {
        if (clusteredMissions.length === 0) {
          if (event.scale < lastClusterZoomLevel * clusterFactor) {
            const missions = makeClusters(networkRef.current);
            setLastClusterZoomLevel(event.scale);
            setClusteredMissions(() => {
              return missions;
            });
            /* Graph library has problems with some clustered edges,
                cleanClusteredEdges solves the problem but because data is not
                instantly updated in the graph, there is the need to wait some
                milliseconds to execute the function. After that the graph needs
                to be redrawn*/
            setTimeout(() => {
              cleanClusterEdges(networkRef.current, missions);
              networkRef.current.redraw();
            }, 5);
          }
        }
        //Zooming in
      } else {
        if (clusteredMissions.length > 0) {
          openClusters(networkRef.current);
          setClusteredMissions([]);
        }
      }
    },
    [lastClusterZoomLevel, clusteredMissions]
  );

  //Enable drag-n-drop for nodes
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

  const selectEdge = useCallback(event => {
    console.log(event);
  });

  const events = useMemo(() => ({ doubleClick, selectEdge, zoom }), [
    doubleClick,
    selectEdge,
    zoom,
  ]);

  return (
    <div
      onDrop={event => onDropAddNode(event)}
      onDragOver={event => event.preventDefault()}
    >
      <Graph
        data={getGraphFromStory(story)}
        options={Options}
        events={events}
        getNetwork={network => (networkRef.current = network)}
      />
    </div>
  );
};

export default GraphCanvas;
