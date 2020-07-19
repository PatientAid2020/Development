import React from 'react'
import { Field, DropDown, TextInput, Button } from '@aragon/ui';

function Form(fields) {
  const [state, setState] = React.useState({});
  
  return(
    <>
      {fields.map((field) => {
        return (
          <Field label={field['prompt']} required={field['required']} key={field['id']}>
            {() => {
              if (field['type'] === 'dropdown') {
                return (<DropDown
                  items={field['items']}
                  selected={state[field['id']] != null ? state[field['id']] : -1}
                  onChange={(index) => { setState({ ...state, [field['id']]:index }) }}
                />);
              } else if (field['type'] === 'text') {
                return (<TextInput
                  value={state[field['id']] != null ? state[field['id']] : ''}
                  onChange={(e) => { setState({ ...state, [field['id']]:e.target.value }) }}
                />);
              }
            }}
          </Field>);
      })}
      <Button label="Submit" onClick={() => handleSubmit(state)} />
    </>
  );
}

function handleSubmit(state) {
  fetch('http://localhost:5000/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(state),
  });
}

export default Form;