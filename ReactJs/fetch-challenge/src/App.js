import Header from "./Header";
import Content from "./Content";
import { useState } from "react";

function App() {
  const FETCH_URL = 'jsonplaceholder.typicode.com';
  const [content, setContent] = useState("demo");
  const 
  return (
    <div className="App">
      <Header content={content} setContent={setContent} />
      <Content content={content} />
    </div>
  );
}

export default App;

