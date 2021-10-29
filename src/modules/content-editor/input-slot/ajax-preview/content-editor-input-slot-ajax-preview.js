import React, {useEffect, useState} from 'react';


// // need a better way to do this in the future
// const contentCache = {};

// const AjaxContentPreview = (props) => {
//     const { shortcode, previewName } = props;
//     const [loading, setLoading] = useState(false);

//     // if we arent loading and the shortcode hasnt been fetched
//     // then go get er'
//     useEffect( () => {
//         if(!contentCache[shortcode] && !loading) {
//             setLoading(true);
//             agent.get("/api/v1/get-shortcode-preview")
//                 .query({shortcode})
//                 .then((res) => {
//                     console.log('res', res)
//                     contentCache[shortcode] = res.body.contents;
//                     setLoading(false);
//                 })
//         }
//     });

//     // render the preview or the fact that the preview is loading
//     if(!contentCache[shortcode]) {
//         return <div>Loading Preview of {previewName}...</div>
//     } else {
//         return <div dangerouslySetInnerHTML={{__html: contentCache[shortcode]}} />
//     }
// }

// export default AjaxContentPreview