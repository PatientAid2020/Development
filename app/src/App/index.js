import React from 'react'
import { Main } from '@aragon/ui';
import './index.css'

import Form from '../DemographicForm'

function App() {
  /* for identification in a healthcare provider's db, i think sex would be a better field than gender */
  const fields = [
    {
      'id': 0,
      'prompt': "What is your sex?",
      'type': 'dropdown',
      'items':
        [
          'Male',
          'Female',
          'Transgender Male to Female',
          'Transgender Female to Male',
          'Intersex',
        ],
      'required':true,
    },
    {
      'id': 1,
      'prompt': "What is your age range?",
      'type': 'dropdown',
      'items':
        [
          '<5',
          '5-17',
          '18-34',
          '35-49',
          '50-59',
          '60-64',
          '65-69',
          '70-74',
          '75-79',
          '80+',
        ],
      'required':true,
    },
    {
      'id': 2,
      'prompt': "What is your name?",
      'type': 'text',
      'required':true,
    },
    {
      'id': 3,
      'prompt': "What is your address?",
      'type': 'text',
      'required':true,
    },
  ]

  return (
    <Main>
      {Form(fields)}
    </Main>
  )
}

export default App
