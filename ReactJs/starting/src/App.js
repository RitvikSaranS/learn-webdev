import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const appStyle = {
    backgroundColor: "#7FFFD4",
  };
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "item-1",
    },
    {
      id: 2,
      checked: false,
      item: "item-2",
    },
    {
      id: 3,
      checked: false,
      item: "item-3",
    },
  ]);

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
  return (
    <div className="App" style={appStyle}>
      <Header title="list" />

      {/* passing down the props to content */}
      <Content
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        items={items}
      />
      <Footer />
    </div>
  );
}

export default App;
