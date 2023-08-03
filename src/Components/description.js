import { ListItems } from "./ListItems";
import  ReactDOM  from "react-dom";

export const Description=(props,{viewDes})=>{
  const styles={
    body:{
       position:'fixed',
       left:0,
       right:0,
       top:0,
       bottom:0,
       backgroundColor:'rgba(198,198,198, 0.9)'
    },

    content:{
        position:'fixed',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        maxWidth:'50vw',
        maxHeight:'50vh',
        top:'50%',
        right:'50%'
    },
title:{

}
  }

    return ReactDOM.createPortal(
       <>
       <div style={styles.body} onClick={props.viewDes}></div>
        <div style={styles.content} className="container">
          <div className="row">{props.item.title}</div>
          <p className="row">{props.item.description}</p>

        </div>
        
       </>, document.querySelector('.showModal')

    )
}