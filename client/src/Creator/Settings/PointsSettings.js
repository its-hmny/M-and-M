import React from 'react';
import FontFamily from './atoms/FontFamily';
import TextColorPicker from './atoms/TextColorPicker';
import FontSize from './atoms/FontSize';
import TextFormat from './atoms/TextFormat';
import TextAlignment from './atoms/TextAlignment';

import useStylesStore from '../stores/styles';

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

  // sadly, we can't use two TextSettings, as it needs to handle nested styles, and it can't
  return (
    <>
      {/*style for message -> TextSettings*/}
      <div>
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
      {/*style for points -> TextSettings*/}
      <div>
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
