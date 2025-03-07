# Unbound Editor
## A work in progress | Don't use unless you know what you're doing!
The Unbound Editor is a versatile, React based content editor for the browser.  It can be used for WISIWYG management of full webpages, configuring App Dashboards, small website widgets, menus, pdf/other documents (such as email drafting, pdfs, etc).  The editor manages and outputs its state as JSON, but the components are capable of outputting not only html, but any format you like.

The emphasis of this library is: 
- Easy Extensibility through configuration, components, and plugins
- Allowing Designers/Developers control over what can/can't be edited
- Easy to use editor interface for nontechnical users
- Leveraging modern React/Flux features and concepts for an intuitive developer experience
- reduced Markup bloat for better efficiency, SEO, etc.
- separation of development concerns
- reusability



## Setup
Install the package
```bash
npm install unb-editor
```
or for yarn
```bash
yarn add unb-editor
```

Next, import the editor into your project, and create a new instance, and then run "start" to start it up!
```js
import {UNBEditor} from 'unb-editor';

const editor = new UNBEditor();

editor.start(document.getElementById("root"));
```
> Why do I have to create it AND call "start?"

There are a few reasons for these being separate.
For one thing, you can add components/plugins between creating/starting the editor, which makes it so that you don't have to do everything through long, complicated configs (though you can do that too!). 
It also makes it easier to create "factories" - eg, a function that creates a pre-configured instance of the editor for your project:
```js

export const getEditorInstance = ()=>{
    return new UNBEditor({pageOptions:{
        js:["alert('hello world!')"],
        scripts:["jquery.min.js"],
        href:"myTemplate.html"
    }})
}
```




# Components
Creating and adding components is extremely easy using JSX, or even functional react.
```js
// create the component
const ExampleComponent = () => (<div>
  <h1 className="fancy-h1">Hello World!</h1>
  <button>CTA!</button>
  </div>)

// add the component
pageEditor.addComponents(ExampleComponent, // the component
    "example-comp", // the internal name  
    "My Example Component"); // the name users will see
```

## Content Editable Components
The above component is not editable as is - but we can easily make parts of it editable with the ContentEditable tag
```js
import { CE } from "unb-editor";
const ExampleComponent = () => (<div>
  <CE.h1 className="fancy-h1">Hello World!</CE.h1>
  <button><CE.rawText>CTA!</CE.rawText></button>
  </div>)
```
now both the h1 and Call to Action button have editable text!  CE (short for ContentEditable) components will never render in your final (saved) markup. They will just show up as regular (noneditable) html tags that can be loaded without any js!

## Keeping your components "Editor Free"
If you want to keep the page editor code *entirely* out of your frontend components, or are adapting an existing library, you can also pass editor components in as props!

```js
import { CE } from "unb-editor";

// this is a totally regular react component, without any editor magic
const RegularReactComponent = ({header, CTAText}) => (<div>
  <h1 className="fancy-h1">{header}</h1>
  <button>{cta}</button>
  </div>)

// this is a working, editable component!
const UNBComponentWrapper = () => (<EditorLessWrapper
  header={<CE.rawText sectionName="h1">Hello World!</CE.rawText>}
  cta={<CE.rawText sectionName="CTA">CTA!</CE.rawText>}
  )
```

# Saving/Loading Data
There are a few options for getting data in and out of the editor. You can either let the page editor control when the saves happen by passing an onSave callback, or get the current markup/state using the editor's api.

## onSave
The onSave callback will receive 1 argument: an object containing the pageState, pageMarkup, metaState, and componentsMarkup.  The componentsMarkup is an array containin each individual component's markup.

If the editor receives an "onsave" callback, it will add Save button to the menu.

```js

// do what you want with the data in the onsave
const onSave = (data) => {
  console.log('markup', data.markup);
  console.log('editor_state', data.pageState);
}

const editor = new UNBEditor({onSave})
```

the onsave callback can be passed to the options either when you create the instance of the editor, or when you start it.


## Saving and Loading Data from the Editor API
In addition to/instead of the onSave callback, if you need to trigger saves outside of the page editor, you can use the instance to get the current state or markup. The editor exposes getEditorState, getMarkup, and 

```js

// do what you want with the data in the onsave
const editor = new UNBEditor()
editor.start(document.getElementById('editor'));

// do something with the data when a dom button is clicked
const externalSaveButton = document.getElementById('outside-save-button');
externalSaveButton.addEventListener('click', ()=>{
  console.log('markup', editor.getMarkup());
  console.log('state', editor.getEditorState());
  console.log('individual', editor.getIndividualMarkup());
});
```

the onsave callback can be passed to the options either when you create the instance of the editor, or when you start it.

# Configuration

You have two opportunities to pass a configuration object to the editor - when you create the instance, and when you start it up.

## Plugins

Type: Array
Description: Extend the editor's functionality by providing an array of plugins.
Components
Type: Array
Description: Add custom components to the editor by supplying an array of component definitions.

## Page Options

### pageHtml

Type: String
Description: Sets the initial HTML content for the editor's internal page.


### renderInIframe

Type: Boolean
Description: Determines whether the content is rendered inside an iframe. Default is true.

### clearContainer

Type: Boolean
Description: If true, clears the existing content of the container before rendering new content.

### documentRoot

Type: String | HTMLElement | Function
Description: Specifies the root element where the editor attaches. Can be a CSS selector, an HTML element, or a function returning an HTML element.

### href

Type: String
Description: URL of an existing HTML page to load into the editor. Ensure the URL complies with Cross-Origin Resource Sharing (CORS) policies.
scripts

### Type: Array of Strings

Description: List of external script URLs to include in the editor.

### js

Type: Array of Strings
Description: Inline JavaScript code snippets to execute within the editor.

[You can see examples of how to set up a page here](#page-options)

## onSave

Type: Function
Description: Callback function invoked upon saving content. Receives the current editor data as an argument. Returning false prevents the default save behavior.

[Read more about saving and loading here](#saving-and-Loading-Data-from-the-Editor-API)

## pageData

Type: Object
Description: Represents the json structure of the page content, typically containing a children array with the page's elements and components.

## pageMeta
Type: Object
Description: Metadata for the page, including:
name: The page's title.
slug: URL-friendly identifier.
status: Publication status, either 'draft' or 'published'.

## renderFlags
Type: Object
Description: Options controlling various rendering behaviors within the editor.  All fields are optional.

### individualComponents
Type: Boolean
Description: If true, the data object passed to onSave will include an array of each individually rendered component.

### noRearrange
Type: Boolean
Description: If true, disables the ability to rearrange components within the editor.

### noAdd
Type: Boolean
Description: If true, prevents adding new components to the editor.

### inlineOptionBar
Type: Boolean
Description: If true, displays the option bar inline with the component, providing quick access to component-specific settings.

### disableFullscreen
Type: Boolean
Description: If true, removes the option to toggle fullscreen mode in the editor.

### disableRefresh
Type: Boolean
Description: If true, disables the refresh functionality within the editor, preventing users from reloading the editor's content.

## contextualPageData
Type: Any
Description: Additional contextual data related to the page, useful for dynamic content or behavior in components or plugins.


### Page Options
The editor renders in an iframe, so you have total control over what css/js is bootstrapped.  You can provide raw html, or a url to an existing page (be mindful of CORS!), and specify in the documentRoot what dom node the editor should attach to.
```js
new UNBEditor({ pageOptions:{
  href: "template.html",
  documentRoot: "main",
  clearContainer: true,
  scripts:[    "vendor/jquery/jquery.min.js",
    "vendor/bootstrap/js/bootstrap.min.js",
    "assets/js/isotope.min.js",
    "assets/js/owl-carousel.js",
    "assets/js/lightbox.js",
    "assets/js/tabs.js",
    "assets/js/video.js",
    "assets/js/slick-slider.js",
    "assets/js/custom.js"],
  js: [`window.alert("hello world!")`],
}});
```

## Coming Soon:
- Complete documentation and examples
- A more complete default component set
- MD output component set
- PDF Generation
- Frontend hydration/js bootstrapping

#### Backend Management
- NextJS Support
- Wordpress Integration/Plugins
- Laravel Integration/Plugins
- Django Integration/Plugins
- Rails Integration/Plugins
- Express Integration/Plugins

# CHANGELOG

## 0.3.3 | Readme Adjustments

## 0.3.1 | TS Definitions Patch
- Adjustments to Type Generation

## 0.3.0 | Initial Package Release 
- Switched from Preact to React
- Updated to React 18
- Added ContentEditable Components