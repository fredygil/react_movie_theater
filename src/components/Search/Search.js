import React from 'react';
import { Input } from 'antd';

const Search = (props) => {
  return (
    <div className="search-box">
      <Input.Search
        placeholder="Search for a movie..."
        onSearch={(value) => props.search(value)}
        enterButton
      />
    </div>
  );
};

export default Search;
