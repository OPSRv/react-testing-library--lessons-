const Search = (props) => {
  const {
    value,
    onChange,
    children = "Search",
    placeholder = "search... ",
  } = props;

  return (
    <label htmlFor="">
      {children}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Search;
