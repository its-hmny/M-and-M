import React from 'react';
import FontFamily from './atoms/FontFamily';
import TextColorPicker from './atoms/TextColorPicker';
import FontSize from './atoms/FontSize';
import TextFormat from './atoms/TextFormat';
import TextAlignment from './atoms/TextAlignment';
import { Typography } from '@material-ui/core';
import useStylesStore from '../stores/styles';
import BackgroundColorPicker from './atoms/BackgroundColorPicker';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
  SettingElement: {
    marginTop: '15px',
  },
}));
const PointsSettings = ({ styleId }) => {
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));

  const onChange = (subStyle, innerId) =>
    updateStyle(
      {
        styleId: innerId,
        ...subStyle,
      },
      styleId
    );
  const onChangeBackground = subStyle => updateStyle({ styleId, ...subStyle });
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4">Component</Typography>
      <BackgroundColorPicker onChange={onChangeBackground} value={styles[styleId]} />
      <Typography variant="h4" className={classes.SettingElement}>
        Points
      </Typography>
      <div className={classes.SettingElement}>
        <FontFamily
          onChange={subStyle => onChange(subStyle, 'Points')}
          value={styles[styleId]['Points']}
        />
        <FontSize
          onChange={subStyle => onChange(subStyle, 'Points')}
          value={styles[styleId]['Points']}
        />
        <TextColorPicker
          onChange={subStyle => onChange(subStyle, 'Points')}
          value={styles[styleId]['Points']}
        />
        <TextFormat
          onChange={subStyle => onChange(subStyle, 'Points')}
          value={styles[styleId]['Points']}
        />
        <TextAlignment
          onChange={subStyle => onChange(subStyle, 'Points')}
          value={styles[styleId]['Points']}
        />
      </div>

      <Typography variant="h4" className={classes.SettingElement}>
        Message
      </Typography>
      <div className={classes.SettingElement}>
        <FontFamily
          onChange={subStyle => onChange(subStyle, 'Text')}
          value={styles[styleId]['Text']}
        />
        <FontSize
          onChange={subStyle => onChange(subStyle, 'Text')}
          value={styles[styleId]['Text']}
        />
        <TextColorPicker
          onChange={subStyle => onChange(subStyle, 'Text')}
          value={styles[styleId]['Text']}
        />
        <TextFormat
          onChange={subStyle => onChange(subStyle, 'Text')}
          value={styles[styleId]['Text']}
        />
        <TextAlignment
          onChange={subStyle => onChange(subStyle, 'Text')}
          value={styles[styleId]['Text']}
        />
      </div>
    </>
  );
};

export default PointsSettings;
