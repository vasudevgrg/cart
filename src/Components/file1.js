import Navbar, { handleShow } from "./navbar";
import Form from "./form";
import { Product } from "./product";
import { Fetch } from "./Fetchdata";
import { useEffect, useState } from "react";
import { HandleShow } from "./navbar";

export const File1 = () => {
// const [form, setForm]= useState(false);

// useEffect(()=>{
//   setForm(!form)
// },[{HandleShow}])

  return (
    <>
    
      <Navbar />
       
      <div className="row">
    <div className="col-4" style={{border:"2px solid black"}} ><Form /> </div>
        <div className="col-8" style={{ display:'flex', flexDirection:'row', padding:'2px'}}>
            {/* <div className="row"> */}
                <Fetch />
            </div>
      </div>


    </>
  );
};


//unable to make 3 dot button to hide our form
