import Item from "./Item";

const ItemList = ({ handleCheck, handleDelete, items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          item={item}
        />
      ))}
    </ul>
  );
};

export default ItemList;
