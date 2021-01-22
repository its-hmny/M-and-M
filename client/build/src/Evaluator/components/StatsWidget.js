import React from '../../../web_modules/react.js';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Paper,
} from '../../../web_modules/@material-ui/core.js';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '../../../web_modules/@material-ui/core.js';

const StatsWidget = ({ player }) => {
  const { avatar, name, id, stats, score } = player;

  const statsRow = [
    {
      label: 'Score',
      value: score,
    },
    ...Object.values(stats),
  ];

  return React.createElement(
    Card,
    null,
    React.createElement(CardHeader, {
      avatar: React.createElement(Avatar, {
        src: avatar,
      }),
      title: name || id,
      subheader: id,
    }),
    React.createElement(
      CardContent,
      null,
      React.createElement(
        Typography,
        {
          variant: 'subtitle1',
        },
        'Here some stats about the player:'
      ),
      React.createElement(
        TableContainer,
        {
          component: Paper,
        },
        React.createElement(
          Table,
          {
            stickyHeader: true,
          },
          React.createElement(
            TableHead,
            null,
            React.createElement(
              TableRow,
              null,
              React.createElement(
                TableCell,
                {
                  align: 'center',
                },
                'Statistic'
              ),
              React.createElement(
                TableCell,
                {
                  align: 'center',
                },
                'Result'
              )
            )
          ),
          React.createElement(
            TableBody,
            null,
            statsRow.map(stat =>
              React.createElement(
                TableRow,
                {
                  key: `${stat.label}-${id}`,
                },
                React.createElement(
                  TableCell,
                  {
                    align: 'center',
                  },
                  stat.label
                ),
                React.createElement(
                  TableCell,
                  {
                    align: 'center',
                  },
                  stat.value || 'No data avaiable'
                )
              )
            )
          )
        )
      )
    )
  );
};

export default StatsWidget;
