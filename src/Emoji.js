import React from 'react';

// function Emoji(props) {
//   // return <div>🤖</div>
//   return <div>Hi</div>
// }
//
// function SadEmoji(props) {
//   return <div>Hi</div>
// }
const emojiFor = (emotion) => {
  console.log(emotion, cat)
  const index = cat ? 1 : 0;
  switch(emotion) {
    case "happy":
      return [ '😀', '🐱' ][index]
    case "sad":
      return [ '🙃', null ][index];
    case "angry":
      return ['😎', null ][index];;
    default:
      return ['😳', null ][index];;

  }

}

function Emoji({ emotion, cat }) {
  return <div>{ emojiFor(emotion, cat) }</div>
}

// function Emojis(props) {
//   return <div>{ props.children }</div>
// }

function Emojis({ children, cat }) {
  cat = !!cat
  return (
    <div>
    {
      children.map((child, index) => (
        <div key={index}>
          // <Emoji emoion={child.props.emotion} />
          <Emoji {...child.props} cat={cat} />
        </div>
      ))
    }
    </div>
  )

}

export { Emoji, Emojis }
