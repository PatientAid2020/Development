import React from 'react'
import { Field, DropDown, TextInput, Button, Box } from '@aragon/ui';
import { Prompt } from 'react-router-dom';
import styled from 'styled-components';
import APIUtils from '../api/APIUtils';

const StyledField = styled(Field)`
  div {
    color: ${props => props.error ? "red" : "inherit"};
  }
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { incomplete:(new Set()), submitted:false };
    this.form = APIUtils.getForm(props.providerId);
    this.providerInfo = APIUtils.getProviderInfo(props.providerId);

    this.onSubmit = this.onSubmit.bind(this);
    this.beforeunload = this.beforeunload.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.beforeunload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.beforeunload);
  }

  //prompts confirmation if exiting before form is complete
  beforeunload(e) {
    e.preventDefault();
    e.returnValue = true;
  }

  //render(): maps all fields fetched using the APIUtils to their corresponding components
  render() {
    return(
      <Box heading={this.form['title']}>
        {this.form['fields'].map((field) => {
          return (
            <StyledField error={this.state.incomplete.has(field['id'])} label={field['prompt']} required={field['required']} key={field['id']}>
              {() => {
                if (field['type'] === 'dropdown') {
                  return (<DropDown
                    items={field['items']}
                    selected={this.state[field['id']] != null ? this.state[field['id']] : -1}
                    onChange={(index) => { this.setState({ [field['id']]:index }); this.state.incomplete.delete(field['id']); }} //remove the red highlight if there is an error
                  />);
                } else if (field['type'] === 'text') {
                  return (<TextInput
                    value={this.state[field['id']] != null ? this.state[field['id']] : ''}
                    onChange={(e) => { this.setState({ [field['id']]:e.target.value }); this.state.incomplete.delete(field['id']); }} //remove the red highlight if there is an error
                  />);
                }
              }}
            </StyledField>);
        })}
        <Button label="Submit" onClick={() => this.onSubmit()} />

        {/* prompts confirmation if exiting before form is complete when using react router links, TODO: find a way to make it use the native dialog box */}
        <Prompt message="Are you sure you want to leave? Your data will be deleted." when={!this.state.submitted}/>
      </Box>
    );
  }

  /*
  onSubmit():
  Called on submit click and checks if all required fields are completed. If so, posts data using APIUtils class and unmounts the exit listener.
  */
  onSubmit() {
    let incomplete = new Set();
    for (const field of this.form['fields']) {
      const isNotValid = 
        !this.state.hasOwnProperty(field['id']) || 
        this.state[field['id']].toString().trim() === '' || 
        this.state[field['id']] === -1;
      if (field['required'] && isNotValid) {
        incomplete.add(field['id']);
      } 
    }
    if (incomplete.size === 0) {
      this.props.onSubmit();
      APIUtils.postFormData(this.props.providerId, this.props.userId, this.state)
      this.componentWillUnmount();
      this.setState({ submitted:true });
    } else {
      this.setState({ incomplete });
    }
  }
}

export default Form;