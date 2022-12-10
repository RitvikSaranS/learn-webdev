import { FaPlus } from "react-icons/fa";

const AddItem = ({ inputItem, setInputItem, handleSubmit }) => {
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
        onChange={(e) => {
          setInputItem(e.target.value);
        }}
      />
      <button
        className="additem"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
