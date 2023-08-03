import { useState } from "react";
import photo from '../images/photo.jpeg';
import Form from './form';

export const Product=()=>{
const [item, setItem]= useState({
    title:"",
    price:0,
    thumbnail:""
})

const styles={
    button:{

    },
    body:{
        display:'flex',
          flexDirection: 'column',
          height: '250px',
          width: '150px', 
          padding: '10px'
    },
    divbody:{
        heigth:'150px',
        width: '150px'
    },
    img:{
      height:''
    }
}

const handleChange=event=>{
// console.log(event.target.value, event.target.name);
    setItem({
        ...item, 
       [event.target.name]: event.target.value
    })
}


    return(
        <>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>

       {/* <Form item={item} onHandleChange={handleChange}/> */}

        <div style={styles.body}>
    <div style={styles.divbody}>
        <img src={require("../images/photo.jpeg")} style={styles.divbody} />
    </div>
    <h3 id="title"> {item.title}</h3>
    <span> ${item.price}</span>

    <button>
    Add to cart
    </button>
</div>
</div>
        </>
    )
}

