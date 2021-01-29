let json = {
  Global: [
    {
      fragment: 'TextFieldFragment',
      props: { valToChange: 'name', label: 'Node name' },
    },
    { fragment: 'ColorPickerFragment', props: { valToChange: 'color' } },
    {
      fragment: 'CheckboxFragment',
      props: { valToChange: 'isInitial', label: 'Is an initial node?' },
    },
    {
      fragment: 'CheckboxFragment',
      props: { valToChange: 'isFinal', label: 'Is a final node?' },
    },
    {
      fragment: 'ButtonFragment',
      props: { text: 'Delete this node', onClick: 'removeNode' },
    },
  ],
  Missions: [
    {
      fragment: 'SelectFragment',
      props: {
        valToChange: 'mission',
        label: 'Select Mission',
        data: 'mission',
        dataName: 'mission',
      },
    },
    { fragment: 'DividerFragment' },
    {
      fragment: 'TextFieldFragment',
      props: { valToChange: 'mission', label: 'Add Mission' },
    },
  ],
  Button: [
    {
      fragment: 'TextFieldFragment',
      props: { valToChange: 'text', label: 'Button text' },
    },
    {
      fragment: 'SelectFragment',
      props: {
        pathAlternative: ['story'],
        valToChange: 'nextNode',
        label: 'Destination',
        data: 'id',
        dataName: 'name',
      },
    },
  ],
  ButtonImage: [
    {
      fragment: 'TextFieldFragment',
      props: { valToChange: 'description', label: 'Image description' },
    },
    {
      fragment: 'SelectFragment',
      props: {
        pathAlternative: ['story'],
        valToChange: 'nextNode',
        label: 'Destination',
        data: 'id',
        dataName: 'name',
      },
    },
    {
      fragment: 'FilePickerFragment',
      props: {
        valToChange: 'imgURL',
        acceptedFileType: 'image/*',
        buttonLabel: 'Upload image',
      },
    },
  ],
  Text: [
    {
      fragment: 'TextFieldFragment',
      props: { valToChange: 'text', label: 'Content' },
    },
  ],
  Input: [
    {
      fragment: 'TextFieldFragment',
      props: { valToChange: 'placeholder', label: 'Description' },
    },
    {
      fragment: 'InputFragment',
      props: {
        valToChange: 'correctAnswer',
        label: 'Correct answer',
        correctStory: '[CORRECT]',
        wrongStory: '[WRONG]',
        selectPath: ['story', 'nextNode'],
        pointsPath: ['story', 'points'],
        pointsValToChange: '[CORRECT]',
      },
    },
    {
      fragment: 'SelectFragment',
      props: {
        pathAlternative: ['story'],
        valToChange: 'nextNode',
        label: 'Destination',
        data: 'id',
        dataName: 'name',
      },
    },
  ],
  ButtonGroup: [],
  Image: [
    {
      fragment: 'TextFieldFragment',
      props: { valToChange: 'description', label: 'Image description' },
    },
    {
      fragment: 'FilePickerFragment',
      props: {
        valToChange: 'imgURL',
        acceptedFileType: 'image/*',
        buttonLabel: 'Upload image',
      },
    },
  ],
  AudioPlayer: [
    {
      fragment: 'FilePickerFragment',
      props: {
        valToChange: 'srcURL',
        acceptedFileType: 'audio/mp3',
        buttonLabel: 'Upload audio',
      },
    },
    {
      fragment: 'CheckboxFragment',
      props: { valToChange: 'autoplay', label: 'Autoplay' },
    },
  ],
  TextArea: [
    {
      fragment: 'TextFieldFragment',
      props: { valToChange: 'label', label: 'Label text' },
    },
    {
      fragment: 'SelectFragment',
      props: {
        pathAlternative: ['story'],
        valToChange: 'nextNode',
        label: 'Destination',
        data: 'id',
        dataName: 'name',
      },
    },
  ],
  Footer: [],
  Spacer: [],
  Background: [],
  SingleAnsChoices: [
    {
      fragment: 'AnswerFragment',
      props: {
        valToChange: 'answers',
        singleCorrectAnswer: true,
        selectPath: ['story', 'nextNode'],
        data: 'id',
        dataName: 'name',
        correctStory: '[CORRECT]',
        wrongStory: '[WRONG]',
        correctLabel: 'Correct Destination',
        wrongLabel: 'Wrong Destination',
      },
    },
    {
      fragment: 'CheckboxFragment',
      props: { valToChange: 'withSubmit', label: 'Submit Button' },
    },
  ],
  MultiAnsChoices: [
    {
      fragment: 'AnswerFragment',
      props: {
        valToChange: 'answers',
        singleCorrectAnswer: false,
        selectPath: ['story', 'nextNode'],
        data: 'id',
        dataName: 'name',
        correctStory: '[CORRECT]',
        wrongStory: '[WRONG]',
        correctLabel: 'Correct Destination',
        wrongLabel: 'Wrong Destination',
      },
    },
    {
      fragment: 'CheckboxFragment',
      props: { valToChange: 'withSubmit', label: 'Submit Button' },
    },
  ],
  SingleAnsChoicesImages: [
    {
      fragment: 'AnswerFragmentImages',
      props: {
        valToChange: 'answers',
        singleCorrectAnswer: true,
        selectPath: ['story', 'nextNode'],
        data: 'id',
        dataName: 'name',
        correctStory: '[CORRECT]',
        wrongStory: '[WRONG]',
        correctLabel: 'Correct Destination',
        wrongLabel: 'Wrong Destination',
      },
    },
    {
      fragment: 'CheckboxFragment',
      props: { valToChange: 'withSubmit', label: 'Submit Button' },
    },
  ],
  MultiAnsChoicesImages: [
    {
      fragment: 'AnswerFragmentImages',
      props: {
        valToChange: 'answers',
        singleCorrectAnswer: false,
        selectPath: ['story', 'nextNode'],
        data: 'id',
        dataName: 'name',
        correctStory: '[CORRECT]',
        wrongStory: '[WRONG]',
        correctLabel: 'Correct Destination',
        wrongLabel: 'Wrong Destination',
      },
    },
    {
      fragment: 'CheckboxFragment',
      props: { valToChange: 'withSubmit', label: 'Submit Button' },
    },
  ],
  Camera: [
    {
      fragment: 'SelectFragment',
      props: {
        pathAlternative: ['story'],
        valToChange: 'nextNode',
        label: 'Destination',
        data: 'id',
        dataName: 'name',
      },
    },
  ],
  YoutubePlayer: [
    {
      fragment: 'TextFieldFragment',
      props: { valToChange: 'srcURL', label: 'Youtube Link' },
    },
  ],
  Points: [
    {
      fragment: 'PointsFragment',
      props: { valToChange: 'messages', data: 'id', dataName: 'name' },
    },
  ],
};

export default json;
