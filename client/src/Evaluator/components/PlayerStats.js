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

const PlayerStats = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src="https://images2.corriereobjects.it/methode_image/2020/07/21/Salute/Foto%20Salute%20-%20Trattate/GettyImages-1220925841-kixF-U3200732353417mED-656x492@Corriere-Web-Sezioni.jpg?v=20200721162605" />
        }
        title="Platername here"
        subheader="playerID here"
      />
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
              <TableRow>
                <TableCell align="center">xxx</TableCell>
                <TableCell align="center">yyy</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">xxx</TableCell>
                <TableCell align="center">yyy</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default PlayerStats;
