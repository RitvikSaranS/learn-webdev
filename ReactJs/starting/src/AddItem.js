import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ inputItem, setInputItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="addForm">
      <label htmlFor="addItem">Add Item</label>
      <input
        className="additem"
        autoFocus
        type="text"
        placeholder="Add Item"
        id="addItem"
        required
        value={inputItem}
        ref={inputRef}
        onChange={(e) => {
          setInputItem(e.target.value);
        }}
      />
      <button
        className="additem"
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
          inputRef.current.focus();
        }}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
