import { useState } from "react";
import { Description } from "./description";

export const ListItems=(props)=>{
    const [value, setValue]= useState(1);
    const [clicked, setClicked]= useState(false);

    const [press, setPress]= useState(false);
  console.log(props.item);
  
    const styles={
        button:{
    
        },
        body:{
            display:'flex',
              flexDirection: 'column',
              height: '250px',
              width: '150px', 
              padding: '1px',
            //   position: 'relative', 
        },
        divbody:{
            heigth:'150px',
            width: '150px',
            minHeight:'150px',
            maxHeight:'150px'
        },
        img:{
          height:''
        },
        title:{
            fontSize:'15px'
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

    const handleCart=()=>{
        if(value>0){
        setClicked(true);
        }else{
            setClicked(false);
        }
    }

    const viewDes=()=>{
        console.log("clicked");
        setPress(!press);
    }
    return (
        <>
        {press && <Description item={props.item} viewDes={viewDes}/>}
        <div style={{display:"flex", flexDirection:"row",justifyContent:"center" }} onClick={()=>viewDes()}>
        <div style={styles.body}>
    <div style={styles.divbody}>
        <img src={require("../images/photo.jpeg")} style={styles.divbody} />
    </div>
    <h3 id="title" style={styles.title}> {props.item.title}</h3>
    <span> ${props.item.price}</span>

    {clicked && <button>
    <button style={{position:'relative', left:'-40px'}} onClick={addItems}>+</button>{value} <button style={{position:'relative', left:'40px'}} onClick={subItems}>-</button>
    </button>}
    {!clicked && <button onClick={()=>handleCart()}> Add to Cart</button>}
</div>
        </div>
        </>
    )

}