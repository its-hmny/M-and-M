! work in progress !
# Client
## Creator
### How to add new Settings for a component
- add component file in Creator/Settings
- add component export in Creator/Settings/index
- add default style name AND style name content in Creator/stores/styles.js: in createStore,
    1. include id in styleIds
    2. include content in styles
- add default values in Creator/Settings/stores/template.js: 
ex:
		TextAreaSettings: () => ({
			name: 'TextArea',
			styleId: 'DefaultTextArea',
			placeholder: 'Default placeholder text',
		})