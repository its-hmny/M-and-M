! work in progress !
# Client
## Adding new components
Here's some help if you need to add a new component.
### Adding the component (across all views)
- add component file in common/elements
- add component export in common/index
- include prop initialValue for default value
- if you're testing, remember that you won't have a style set up, so style will be undefined! style info is in creator section
	also, all the story props will be undefined until you finish the editor part
### Adding new Settings (Creator component) for a component
- add component settings file in `Creator/Settings`
- add component settings export in `Creator/Settings/index`
- add default style name AND style name content in `Creator/stores/styles.js`: in createStore,
    1. include id in styleIds
    2. include content in styles
- add default values in Creator/Settings/stores/template.js: 
ex:
		```js
		TextAreaSettings: () => ({
			name: 'TextArea',
			styleId: 'DefaultTextArea',
			placeholder: 'Default placeholder text',
		})
		```
### Creating the editor part
- combine fragments from `Editor/components/EditorFragments`, add a new one if needed
- edit `Editor/constants/ComponentProperties.json`
- import file in `Editor/components/EditorFragments/index.js` and add to export if a new fragment has been added