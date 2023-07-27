import { useState } from "react";
import photo from '../images/photo.jpeg';
import Form from './form';

export const Product=()=>{
    const [value, setValue]= useState(0);
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
const addItems=()=>{
    
    setValue(value+1);
}

const subItems=()=>{
    if(value>0){
    setValue(value-1);
    }
}

const handleChange=event=>{
console.log(event.target.value, event.target.name);
    setItem({
        ...item, 
       [event.target.name]: event.target.value
    })
}


    return(
        <>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>

       <Form item={item} onHandleChange={handleChange}/>

        <div style={styles.body}>
    <div style={styles.divbody}>
        <img src={require("../images/photo.jpeg")} style={styles.divbody} />
    </div>
    <h3 id="title"> {item.title}</h3>
    <span> ${item.price}</span>

    <button>
    <button style={{position:'relative', left:'-40px'}} onClick={addItems}>+</button>{value} <button style={{position:'relative', left:'40px'}} onClick={subItems}>-</button>
    </button>
</div>
</div>
        </>
    )
}

