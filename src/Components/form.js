import { useState } from "react";
import { ListItems } from "./ListItems";

 const Form=(props)=>{
const [totalItems, setTotalItems]= new useState([

])
const handleChange=e=>{
    props.onHandleChange(e);
}

const handleSubmit=(event)=>{
    event.preventDefault();
    setTotalItems(...totalItems,props.item);
     <ListItems item={props.item} />
}

    return(

        <form action="" style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
            <label htmlFor="">Title</label>
            <input type="text" onChange={handleChange} name="title"/>

            <label >Price</label>
            <input type="number" onChange={handleChange} name="price" />

            <label htmlFor="">ThumbNail</label>
            <input type="text" onChange={handleChange} name="thumbnail" />
            <button onSubmit={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form;