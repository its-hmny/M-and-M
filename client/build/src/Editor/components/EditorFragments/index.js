import React, { useMemo } from '../../../../web_modules/react.js';
import { makeStyles } from '../../../../web_modules/@material-ui/core.js';
import ButtonFragment from './ButtonFragment.js';
import ColorPickerFragment from './ColorPickerFragment.js';
import FilePickerFragment from './FilePickerFragment.js';
import SelectFragment from './SelectFragment.js';
import TextFieldFragment from './TextFieldFragment.js';
import CheckboxFragment from './CheckboxFragment.js';
import AnswerFragment from './AnswerFragment.js';
import RadioFragment from './RadioFragment.js';
import DividerFragment from './DividerFragment.js';
import InputFragment from './InputFragment.js';
import AnswerFragmentImages from './AnswerFragmentImages.js';

const fragmentsComponents = {
    ButtonFragment,
    ColorPickerFragment,
    FilePickerFragment,
    SelectFragment,
    TextFieldFragment,
    CheckboxFragment,
    AnswerFragment,
    RadioFragment,
    DividerFragment,
    InputFragment,
    AnswerFragmentImages,
};

const useStyles = makeStyles({
    InspectorPaper: {
        padding: 10,
        paddingBottom: 20,
    },
    InspectorElement: {
        marginTop: 5,
        marginLeft: 15,
        boxSizing: 'content-box',
    },
    FormControl: {
        minWidth: 150,
    },
    colorButton: {
        margin: 10,
        marginLeft: 30,
        width: 60,
        height: 30,
        border: 'none',
        background: 'none',
    },
    colorLabel: {
        margin: 10,
        marginLeft: 15,
        fontSize: 18,
    },
});
/* Component loading dynamically EditorFragments based on data passed through 
   fieldsToSet(data comes from ComponentProperties.json).  */

const DynamicLoadFragments = (props) => {
    const { fieldsToSet, pathToVal } = props;

    const classes = useStyles();

    const fragmentList = useMemo(
        () =>
            fieldsToSet.map((item, index) => {
                const EditorFragment = fragmentsComponents[item.fragment];

                return React.createElement(EditorFragment, {
                    key: `${item.fragment}${index}`,
                    path: pathToVal,
                    classNames: classes,
                    fragmentSpecificProps: item.props,
                });
            }),
        [fieldsToSet, classes, pathToVal],
    );

    return React.createElement(React.Fragment, null, fragmentList);
};

export default DynamicLoadFragments;
