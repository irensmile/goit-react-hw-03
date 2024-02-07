import css from './SearchBox.module.css';
export const SearchBox = ({ onSearch }) => {
  const onInput = e => {
    onSearch(e.target.value);
  };

  return (
    <>
      <h2 className={css.header}>Find Contacts by Name</h2>
      <input className={css['search-box']} onInput={onInput}></input>
    </>
  );
};
