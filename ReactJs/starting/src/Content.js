// import { useState } from "react";
import "./Content.css";
import ItemList from "./ItemList";

const Content = ({ handleCheck, handleDelete, items }) => {
  return (
    <div>
      {items.length ? (
        <ItemList
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          items={items}
        />
      ) : (
        <p style={{ margin: "2rem 0" }}>The list is empty</p>
      )}
    </div>
  );
};

export default Content;
