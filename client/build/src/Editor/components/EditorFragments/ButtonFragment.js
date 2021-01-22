import React from '../../../../web_modules/react.js';
import { Button } from '../../../../web_modules/@material-ui/core.js';
import { useEditor } from '../../context/EditorContext.js';

const ButtonFragment = (props) => {
  const { classNames, fragmentSpecificProps } = props;

  const { story, workingActivity, saveStory, setWorkingActivity } = useEditor();
  /* Switch to check which predefined button function to use */

  var onClick;

  if (fragmentSpecificProps.onClick === 'removeNode') {
    onClick = () => {
      let { nodes, ...others } = story;

      nodes = nodes.filter((node) => node.id !== workingActivity);
      saveStory({
        nodes,
        ...others,
      });
      setWorkingActivity(undefined);
    };
  }

  return React.createElement(
    Button,
    {
      onClick: () => onClick(),
      color: 'primary',
      variant: 'contained',
      className: classNames.InspectorElement,
    },
    fragmentSpecificProps.text,
  );
};

export default ButtonFragment;
