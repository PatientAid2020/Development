import React from 'react'
import { Field, DropDown, TextInput, Button, Box } from '@aragon/ui';
import APIUtils from '../api/APIUtils';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.form = APIUtils.getForm(props.providerId);
  }

  render() {
    return(
      <Box heading={this.form['title']}>
        {this.form['fields'].map((field) => {
          return (
            <Field label={field['prompt']} required={field['required']} key={field['id']}>
              {() => {
                if (field['type'] === 'dropdown') {
                  return (<DropDown
                    items={field['items']}
                    selected={this.state[field['id']] != null ? this.state[field['id']] : -1}
                    onChange={(index) => { this.setState({ [field['id']]:index }) }}
                  />);
                } else if (field['type'] === 'text') {
                  return (<TextInput
                    value={this.state[field['id']] != null ? this.state[field['id']] : ''}
                    onChange={(e) => { this.setState({ [field['id']]:e.target.value }) }}
                  />);
                }
              }}
            </Field>);
        })}
        //need to add verification to ensure all required form fields are filled out
        <Button label="Submit" onClick={() => APIUtils.postFormData(this.props.providerId, this.props.userId, this.state)} />
      </Box>
    );
  }
}

export default Form;