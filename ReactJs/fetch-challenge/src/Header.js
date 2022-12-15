const Header = ({ setContent }) => {
  return (
    <div>
      <button onClick={(e) => setContent("hello")} className="header">
        users
      </button>
      <button onClick={(e) => setContent(e.target.content)} className="header">
        posts
      </button>
      <button onClick={(e) => setContent(e.target.content)} className="header">
        comments
      </button>
    </div>
  );
};

export default Header;
