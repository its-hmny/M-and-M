import React from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Paper,
} from '@material-ui/core';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

const StatsWidget = ({ player }) => {
  const { avatar, name, id, stats } = player;
  return (
    <Card>
      <CardHeader avatar={<Avatar src={avatar} />} title={name || id} subheader={id} />
      <CardContent>
        <Typography variant="h6">Some shit stats for the foking player</Typography>
        <TableContainer component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">Statistic</TableCell>
                <TableCell align="center">Result</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {Object.keys(stats).map(statName => (
                <TableRow>
                  <TableCell align="center">{statName}</TableCell>
                  <TableCell align="center">{stats[statName]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default StatsWidget;
