import React from "react";

const Search = ({ handleClickSearchButton, handleChangeSearchInput }) => {
  return (
    <div>
      <input onChange={handleChangeSearchInput}></input>
      {/* 이벤트 바인딩 */}
      <button onClick={handleClickSearchButton}>검색</button>
    </div>
  );
};

export default Search;
