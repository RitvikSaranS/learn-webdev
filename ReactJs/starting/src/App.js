import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import SearchItem from "./SearchItem";
import { useState, useEffect } from "react";

function App() {
  const appStyle = {
    backgroundColor: "#7FFFD4",
  };
  const FETCH_URL = "http://localhost:4000/items";
  const [items, setItems] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);

  // load on page rendering
  // useEffect(() => {
  //   localStorage.setItem("shoppinglist", JSON.stringify(items));
  // }, [items]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(FETCH_URL);
        if (!response.ok) throw Error("Didn't recieve data");
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
      } catch (err) {
        setFetchError(err.stack);
      }
    };
    fetchItems();
  }, []);

  const addItem = (newItem) => {
    const nextId = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id: nextId, checked: false, item: `${newItem}` };
    const savedList = [...items, myNewItem];
    // items.concat([{ id: nextId, checked: false, item: `${inputItem}` }])
    setItems(savedList);
  };

  const handleCheck = (id) => {
    const changedList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(changedList);
  };

  const handleDelete = (id) => {
    const afterDelete = items.filter((item) => item.id !== id);
    setItems(afterDelete);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputItem) return;
    addItem(inputItem);
    setInputItem("");
  };

  return (
    <>
      {fetchError ? (
        <p>Server Error</p>
      ) : (
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
      )}
    </>
  );
}

export default App;
