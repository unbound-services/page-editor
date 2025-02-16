import InputSlot from "../input-slot";
import * as React from "react"
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// class RichTextInput extends InputSlot {
//   render() {
//     const {
//       sectionName,
//       label = "",
//       hidden = false,
//       tagName = "div",
//       inputClass,
//       useTheme = "snow",
//       ...otherProps
//     } = this.props;

//     const TagName = tagName;
//     const { editorState: state, editing } = this.context;
//     const onChange = (content, delta, source, editor) => {
//       this.context.setState({
//         ...state,
//         [sectionName]: {
//           content: content,
//           quillState: editor.getContents(),
//         },
//       });
//     };
//     console.log("state", state);

//     let classNames = "section__common-text";
//     if (inputClass) {
//     }

//     if (editing) {
//       return (
//         <React.Fragment>
//           {label}
//           <ReactQuill
//             onChange={onChange}
//             value={state[sectionName] ? state[sectionName]["quillState"] : ""}
//             theme={useTheme}
//             style={{ height: 400 }}
//           />
//         </React.Fragment>
//       );
//     } else {
//       if (hidden) {
//         return null;
//       }
//       let content = "";
//       if (state[sectionName] && state[sectionName].content)
//         content = state[sectionName].content;
//       return (
//         <TagName
//           className={inputClass}
//           dangerouslySetInnerHTML={{
//             __html: content,
//           }}
//           {...otherProps}></TagName>
//       );
//     }
//   }
// }

// export default RichTextInput;
