import "./Header.css";

// title is the props from indexjs
const Header = ({ title }) => {
  return (
    <div>
      <h1>Grocery {title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: "List",
};

export default Header;
