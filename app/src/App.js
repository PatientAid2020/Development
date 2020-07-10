import React from 'react'
import {
  Main,
  Header,
  Button,
  IconPlus,
  Tag,
  SidePanel,
  TextInput,
} from '@aragon/ui'

import { _AutoComplete as AutoComplete } from '@aragon/ui'

const items = [
  'Bruce Wayne',
  'Bruce Banner',
  'Bruce Springsteen',
  'Bruce Lee',
  'Bruce Willis',
]

function App() {
  const [sidePanelOpened, setSidePanelOpened] = React.useState(false)
  const [message, setMessage] = React.useState('Loading...')
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((text) => {
        setMessage(text)
      })
  }, [])

  const [searchTerm, setSearchTerm] = React.useState(null)
  const ref = React.useRef()

  return (
    <Main>
      <Header
        primary={
          <>
            Tokens
            <Tag mode="identifier">PTO</Tag>
          </>
        }
        secondary={
          <Button
            mode="strong"
            label="Add tokens"
            icon={<IconPlus />}
            onClick={() => setSidePanelOpened(true)}
          />
        }
      />
      <AutoComplete
        items={items.filter(
          (name) =>
            searchTerm &&
            name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        )}
        onChange={setSearchTerm}
        onSelect={(value) => {
          // textRef.current.value = value
          setSearchTerm(null)
        }}
        ref={ref}
        placeholder="Search"
      />
      <TextInput
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
      />
      <SidePanel
        title="Add tokens"
        opened={sidePanelOpened}
        onClose={() => setSidePanelOpened(false)}
      >
        <div>{message}</div>
      </SidePanel>
    </Main>
  )
}

export default App
