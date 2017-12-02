import React from 'react'
import { Emoji, Emojis } from './emoji';
//const App = (props) => (<div>Hello World</div>)
function App(props) {
  // return <div>😶</div>
  return (
    <Emojis cat>
      <Emoji emotion="happy"/>
      <Emoji emotion="sad"/>
      <Emoji emotion="angry"/>
      <Emoji emotion="sad"/>
      <Emoji emotion="del"/>
    </Emojis>
  )
}

export default App
