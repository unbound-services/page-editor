import React, {useCallback} from 'react';
import ReactDom from 'react-dom';
import {useDropzone} from 'react-dropzone';

const ImageUpload = (props) => {
	const onDrop = useCallback(acceptedFiles => {
    props.onDrop(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

	const isDragging = <div style={{width: 200, height: 200, color: 'white', border: 'thin solid white'}}>Drop them Here!</div>;
	const isNotDragging = <div style={{width: 200, height: 200, color: 'white', border: 'thin solid white'}}>Drag and drop Files here, or click to select</div>

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ? isDragging : isNotDragging
      }
    </div>
  )
}

export default ImageUpload;
