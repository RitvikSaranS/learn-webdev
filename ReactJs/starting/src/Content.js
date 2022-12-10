// import { useState } from "react";
import "./Content.css";
import { AiFillDelete } from "react-icons/ai";

const Content = ({ handleCheck, handleDelete, items }) => {
  // const [name, setName] = useState("name");
  // const nameArray = ["Ritvik", "Saran", "Karthik"];
  // const chooseName = () => {
  //   setName(nameArray[Math.floor(Math.random() * 3)]);
  // };
  return (
    <div>
      {/* <p className="content">Hello {name}</p>
      <button onClick={chooseName}>Click to change name</button> */}
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label>{item.item}</label>
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                <AiFillDelete />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ margin: "2rem 0" }}>The list is empty</p>
      )}
    </div>
  );
};

export default Content;
