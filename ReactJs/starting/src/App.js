import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const appStyle = {
    backgroundColor: "#7FFFD4",
  };
  return (
    <div className="App" style={appStyle}>
      <Header title="list" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
