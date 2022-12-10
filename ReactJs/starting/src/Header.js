import "./Header.css";

// title is the props from indexjs
const Header = ({ title }) => {
  return (
    <div>
      <h1>Grocery {title}</h1>
    </div>
  );
};

export default Header;
