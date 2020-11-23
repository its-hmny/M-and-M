! work in progress !
# Client
## Adding new components
Here's some help if you need to add a new component.
### Adding the component (across all views)
- add component file in common/elements:
	- REMEMBER to include z-index: 1 in base css
- add component export in common/index
### Adding new Settings (Creator component) for a component
- add component settings file in Creator/Settings
- add component settings export in Creator/Settings/index
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