import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import SearchItem from "./SearchItem";
import { useState } from "react";

function App() {
  const appStyle = {
    backgroundColor: "#7FFFD4",
  };
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );
  const [inputItem, setInputItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newList) => {
    setItems(newList);
    localStorage.setItem("shoppinglist", JSON.stringify(newList));
  };

  const addItem = (newItem) => {
    const nextId = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id: nextId, checked: false, item: `${newItem}` };
    const savedList = [...items, myNewItem];
    // items.concat([{ id: nextId, checked: false, item: `${inputItem}` }])
    setAndSaveItems(savedList);
  };

  const handleCheck = (id) => {
    const changedList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(changedList);
  };

  const handleDelete = (id) => {
    const afterDelete = items.filter((item) => item.id !== id);
    setAndSaveItems(afterDelete);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputItem) return;
    addItem(inputItem);
    setInputItem("");
  };

  return (
    <div className="App" style={appStyle}>
      <Header title="list" />
      <SearchItem search={search} setSearch={setSearch} />
      {/* passing down the props to content */}
      <Content
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
      />
      <AddItem
        inputItem={inputItem}
        setInputItem={setInputItem}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default App;
