import React from 'react';
import { FileUpload } from 'redux-file-upload';

class ReduxFileUpload extends React.Component {
  render() {
    return (
      <FileUpload
        allowedFileTypes={['txt']}
        data={{ type: 'text file' }}
        dropzoneId="fileUpload"
        dropzoneActiveStyle={{ 'background-color': 'red' }}
        url="/files/uploaded">
        <button>Click or drag here</button>
      </FileUpload>
    );
  }
}

export default ReduxFileUpload;
