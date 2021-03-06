import React from 'react';
import { useHistory } from 'react-router-dom';
import { Fab, makeStyles } from '@material-ui/core';
import { Home as HomeIcon, GetApp as GetAppIcon } from '@material-ui/icons';

import { useEvaluator } from './context/EvaluatorContext';
import { ActivePlayersList, ProgressGraph, WidgetArea } from './components/';

import * as ROUTES from '../routes';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
  },
  main: {
    height: '100vh',
    display: 'flex',
    '& .vis-network': {
      outline: 'none',
    },
  },
  buttonsContainer: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(30),
    display: 'flex',
    flexDirection: 'row',
    zIndex: 1,
  },
  navButton: {
    marginRight: theme.spacing(2),
  },
  navIcon: {
    marginRight: theme.spacing(1),
  },
}));

const triggerDownload = ({ name, url }) => {
  const link = document.createElement('a');
  document.body.appendChild(link);
  link.download = name;
  link.href = url;
  link.click();
  document.body.removeChild(link);
};

const App = () => {
  const history = useHistory();
  const classes = useStyles();
  const { playersLog } = useEvaluator();

  const downloadLogs = () => {
    // Deep copy (does not keep the reference to the original object)
    const logCopy = JSON.parse(JSON.stringify(playersLog));
    const playerRanking = logCopy.sort((x, y) => y.score - x.score);
    const teamRanking = logCopy
      // Get the team list with their respective team score
      .reduce((list, { team, score, name, id }) => {
        // The current player has no team
        if (team === '') return list;
        const playerTeam = list.find(item => item.name === team);
        if (playerTeam) {
          playerTeam.score += score;
          playerTeam.components.push(name || id);
        } else list.push({ name: team, score, components: [name || id] });
        return list;
      }, [])
      // Sort it by the score to get a ranking
      .sort((x, y) => y.score - x.score);

    const completeLog = { playerRanking, teamRanking };
    const exportURI = encodeURIComponent(JSON.stringify(completeLog));
    const url = `data:text/json;charset=utf-8,${exportURI}`;
    triggerDownload({ name: 'StoryMatchLog.json', url });
  };

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <ActivePlayersList />
        <div className={classes.buttonsContainer}>
          <Fab
            className={classes.navButton}
            onClick={() => history.push(ROUTES.HOME)}
            variant="extended"
          >
            <HomeIcon className={classes.navIcon} />
            Home
          </Fab>
          <Fab className={classes.navButton} onClick={downloadLogs} variant="extended">
            <GetAppIcon className={classes.navIcon} />
            Download log
          </Fab>
        </div>
        <ProgressGraph />
      </div>
      <WidgetArea />
    </div>
  );
};

export default App;

/*
  const playerSort = (x, y) => y.score - x.score;
  const getTeamScore = teamName =>
    playersLog.reduce(
      (teamScore, { team, score }) => teamScore + (team === teamName ? score : 0),
      0
    );
  const teamSort = (x, y) => getTeamScore(y.team) - getTeamScore(x.team);
*/
