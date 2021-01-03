! work in progress !
# Client
## Adding new components
Here's some help if you need to add a new component.
### Adding the component (across all views)
- add component file in common/elements
- add component export in common/index
- include prop initialValue for default value
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
### Creating the editor part
- combine fragments from `Editor/components/EditorFragments`
- edit `Editor/constants/ComponentProperties.json`
- import file in `Editor/components/EditorFragments/index.js` and add to export