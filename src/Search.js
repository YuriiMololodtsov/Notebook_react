import React, { useState } from 'react';

function Search(props) {
  const [search, setSearch] = useState('');
  function searchItem(event) {
    setSearch(event.target.value);
  }
  function searchElement(arr, search) {
    arr.forEach((item, index) => {
      index == search && props.setValue(item);
    });
  }
  console.log(props);
  return (
    <>
      <input value={search} onChange={searchItem} placeholder="Поиск" />
      <button onClick={() => searchElement(props.notes, search)}>Поиск</button>
    </>
  );
}

export default Search;
