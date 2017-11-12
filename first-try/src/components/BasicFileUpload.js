import React from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import Dropzone from 'react-dropzone'; //there are bugs with dropzone.

class Basic extends React.Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <form action="#">
        <section>
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <Field
                name="file"
                component="input"
                type="file"
                onChange={e => {
                  e.preventDefault();
                  const { fields } = this.props;
                  const files = [...e.target.files];
                  fields;
                }}
              />
            </div>
            <div className="file-path-wrapper">
              <Field
                name="validateFile"
                component="input"
                type="text"
                className="file-path-validate"
              />
            </div>
          </div>
        </section>
      </form>
    );
  }
}

export default reduxForm({ form: 'fileupload' })(Basic);
