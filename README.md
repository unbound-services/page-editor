# Unbound Editor
## A work in progress | Don't use unless you know what you're doing!
The Unbound Editor is a versatile, React based content editor for the browser.  It can be used for WISIWYG management of full webpages, configuring App Dashboards, small website widgets, menus, pdf/other documents (such as email drafting, pdefs, etc).  The editor manages and outputs its state as JSON, but the components are capable of outputting not only html, but any format you like.

The emphasis of this library is: 
- Easy Extensibility through configuration, components, and plugins
- Allowing Designers/Developers control over what can/can't be edited
- Easy to use editor interface for nontechnical users
- Leveraging modern React/Flux features and concepts for an intuitive developer experience
- reduced Markup bloat for better efficiency, SEO, etc.
- separation of development concerns
- reusability



## setup
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


## Components
Creating and adding components is extremely easy using JSX, or even functional react.
```js
// create the component
const ExampleComponent = () => (<div>
  <h1 className="fancy-h1">Hello World!</h1>
  <button>CTA!</button>
  </div>)

// add the component
pageEditor.addComponents(ExampleComponent, "example-comp", "My Example Component");
```

### Content Editable Components
The above component is not editable as is - but we can easily make parts of it editable with the ContentEditable tag
```js
import { CE } from "unb-editor";
const ExampleComponent = () => (<div>
  <CE.h1 className="fancy-h1">Hello World!</CE.h1>
  <button><CE.rawText>CTA!</CE.rawText></button>
  </div>)
```
now both the h1 and Call to Action button have editable text!  CE (short for ContentEditable) components will never render in your final (saved) markup. They will just show up as regular (noneditable) html tags that can be loaded without any js!

### Keeping your components "Dump"
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

## Page Options
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