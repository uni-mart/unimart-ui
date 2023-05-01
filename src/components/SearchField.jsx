import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function SearchField(props) {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    props.onSearchTextChange(event.target.value);
  };

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleSearchTextChange}
        debounce={props.debounce || 300}
        onClear={props.onClear}
      />
    </Form>
  );
}

export default SearchField;
