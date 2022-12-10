import { AiFillDelete } from "react-icons/ai";

const Item = ({ handleCheck, handleDelete, item }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label>{item.item}</label>
      <button
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        <AiFillDelete />
      </button>
    </li>
  );
};

export default Item;
