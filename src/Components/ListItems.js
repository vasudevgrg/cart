import { useState } from "react";

export const ListItems=(props)=>{
    const [value, setValue]= useState(0);
  console.log("here");
    const styles={
        button:{
    
        },
        body:{
            display:'flex',
              flexDirection: 'row',
              height: '250px',
              width: '150px', 
              padding: '10px',
              position: 'relative'
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
    return (
        <>
        {console.log("here1")}
        <div>
        <div style={styles.body}>
    <div style={styles.divbody}>
        <img src={require("../images/photo.jpeg")} style={styles.divbody} />
    </div>
    <h3 id="title"> {props.item.title}</h3>
    <span> ${props.item.price}</span>

    <button>
    <button style={{position:'relative', left:'-40px'}} onClick={addItems}>+</button>{value} <button style={{position:'relative', left:'40px'}} onClick={subItems}>-</button>
    </button>
</div>
        </div>
        </>
    )

}