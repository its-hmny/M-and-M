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
  const { avatar, name, id, stats, score } = player;
  const statsRow = [{ label: 'Score', value: score }, ...Object.values(stats)];

  return (
    <Card>
      <CardHeader avatar={<Avatar src={avatar} />} title={name || id} subheader={id} />
      <CardContent>
        <Typography variant="subtitle1">Here some stats about the player:</Typography>
        <TableContainer component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">Statistic</TableCell>
                <TableCell align="center">Result</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statsRow.map(stat => (
                <TableRow key={`${stat.label}-${id}`}>
                  <TableCell align="center">{stat.label}</TableCell>
                  <TableCell align="center">{stat.value || 'No data avaiable'}</TableCell>
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
