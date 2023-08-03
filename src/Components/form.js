import { useState } from "react";
import { ListItems } from "./ListItems";

const Form = () => {

 
  const [item, setItem] = useState({
    title: "",
    price: 0,
    thumbnail: "",
  });

  const [totalItems, setTotalItems] = new useState([]);

  const handleChange = (event) => {
    // console.log(event.target.value, event.target.name);
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTotalItems([...totalItems, item]);
    console.log(totalItems);
    <ListItems item={item}/>
  };
  return (
    <>
 
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label htmlFor="">Title</label>
        <input type="text" onChange={handleChange} name="title" />

        <label>Price</label>
        <input type="number" onChange={handleChange} name="price" />

        <label htmlFor="">ThumbNail</label>
        <input type="text" onChange={handleChange} name="thumbnail" />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      </>
  );
};

export default Form;
