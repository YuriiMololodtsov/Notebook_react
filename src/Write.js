import React, { useState } from 'react';
import Search from './Search';

function Write(props) {
  const arrMenu = [];
  const [notes, setNotes] = useState(arrMenu);
  const [value, setValue] = useState('');
  const [editNum, setEditNum] = useState(null);

  const result = notes.map((note, index) => {
    return (
      <>
        <p key={index} onClick={() => startEdit(index)}>
          {note}
        </p>
        <button onClick={() => remItem(index)}>del</button>
      </>
    );
  });
  function remItem(index) {
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
  }
  function startEdit(index) {
    setEditNum(index);
    setValue(notes[index]);
  }
  function changeHandler(event) {
    setValue(event.target.value);

    if (editNum) {
      setNotes([
        ...notes.slice(0, editNum),
        event.target.value,
        ...notes.slice(editNum + 1),
      ]);
    }
  }
  function blurHandler(event) {
    if (!editNum) {
      setNotes([...notes, value]);
    } else {
      setEditNum(null);
    }

    setValue('');
  }

  return (
    <div>
      <textarea
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
        placeholder="Сделать запись"
      />
      <Search notes={notes} setValue={setValue} />
      {result}
    </div>
  );
}

export default Write;
