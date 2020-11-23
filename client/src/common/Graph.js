import React, { useEffect, useRef } from 'react';
import isEqual from 'lodash.isequal';
import differenceWith from 'lodash.differencewith';
import { DataSet } from 'vis-data/peer/esm/vis-data';
import { Network } from 'vis-network/peer/esm/vis-network';

import 'vis-network/styles/vis-network.css';

const defaultOptions = {
  physics: {
    stabilization: false,
  },
  autoResize: false,
  edges: {
    smooth: false,
    color: '#000000',
    width: 0.5,
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 0.5,
      },
    },
  },
};

const Graph = ({
  data,
  options = defaultOptions,
  events = {},
  getNetwork,
  getNodes,
  getEdges,
}) => {
  const nodes = useRef(new DataSet(data.nodes));
  const edges = useRef(new DataSet(data.edges));
  const network = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    network.current = new Network(
      container.current,
      { nodes: nodes.current, edges: edges.current },
      options
    );

    if (getNetwork) {
      getNetwork(network.current);
    }

    if (getNodes) {
      getNodes(nodes.current);
    }

    if (getEdges) {
      getEdges(edges.current);
    }
  }, []);

  useEffect(() => {
    const nodesChange = !isEqual(nodes.current, data.nodes);
    const edgesChange = !isEqual(edges.current, data.edges);

    if (nodesChange) {
      const idIsEqual = (n1, n2) => n1.id === n2.id;
      const nodesRemoved = differenceWith(nodes.current.get(), data.nodes, idIsEqual);
      const nodesAdded = differenceWith(data.nodes, nodes.current.get(), idIsEqual);
      const nodesChanged = differenceWith(
        differenceWith(data.nodes, nodes.current.get(), isEqual),
        nodesAdded
      );

      nodes.current.remove(nodesRemoved);
      nodes.current.add(nodesAdded);
      nodes.current.update(nodesChanged);
    }

    if (edgesChange) {
      const edgesRemoved = differenceWith(edges.current.get(), data.edges, isEqual);
      const edgesAdded = differenceWith(data.edges, edges.current.get(), isEqual);
      const edgesChanged = differenceWith(
        differenceWith(data.edges, edges.current.get(), isEqual),
        edgesAdded
      );
      edges.current.remove(edgesRemoved);
      edges.current.add(edgesAdded);
      edges.current.update(edgesChanged);
    }
  }, [data]);

  useEffect(() => {
    network.current.setOptions(options);
  }, [options]);

  useEffect(() => {
    // Add user provied events to network
    // eslint-disable-next-line no-restricted-syntax
    for (const eventName of Object.keys(events)) {
      network.current.on(eventName, events[eventName]);
    }

    return () => {
      for (const eventName of Object.keys(events)) {
        network.current.off(eventName, events[eventName]);
      }
    };
  }, [events]);

  return <div ref={container} />;
};

export default Graph;
