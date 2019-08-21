import React from 'react'

const Note = ({note}) => <li>{note.content}</li>
const DisplayList = ({list}) => <ul>{list.map(item => <Note key={item.id} note={item} />)}</ul>

export default DisplayList