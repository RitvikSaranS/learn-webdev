import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import SearchItem from "./SearchItem";
import { useState, useEffect } from "react";
import apiRequest from "./apiRequest";

function App() {
  const appStyle = {
    backgroundColor: "#7FFFD4",
  };
  const FETCH_URL = "http://localhost:4000/items";

  const [items, setItems] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setItems(listItems);
      } catch (err) {
        setFetchError(err.stack);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const addItem = async (newItem) => {
    const nextId = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id: nextId, checked: false, item: `${newItem}` };
    const savedList = [...items, myNewItem];
    // items.concat([{ id: nextId, checked: false, item: `${inputItem}` }])
    setItems(savedList);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };

    const result = await apiRequest(FETCH_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const changedList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(changedList);

    const checkedItem = changedList.filter((item) => id === item.id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: checkedItem[0].checked }),
    };

    const reqUrl = `${FETCH_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const afterDelete = items.filter((item) => item.id !== id);
    setItems(afterDelete);

    const deleteOptions = {
      method: "DELETE",
    };

    const reqUrl = `${FETCH_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
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
        <h1>Server error : Sorry for the inconvenience</h1>
      ) : (
        <div className="App" style={appStyle}>
          <Header title="list" />
          <SearchItem search={search} setSearch={setSearch} />
          {/* passing down the props to content */}
          {loading && (
            <p style={{ margin: "1rem", color: "red" }}>Items are loading</p>
          )}
          {!loading && (
            <Content
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              items={items.filter((item) =>
                item.item.toLowerCase().includes(search.toLowerCase())
              )}
            />
          )}
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
