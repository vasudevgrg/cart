import { useState } from 'react';
import img from '../images/shopping-cart.png';
import { Product } from './product';

const Navbar=()=>{


    return (
        <>
       
        <div style={{display: 'flex', flexDirection: 'row',position:'sticky',alignItems:'flex-start', backgroundColor: 'yellow', justifyContent:'space-between', padding:'10px'}}>
            <button style={{border:'1px solid black', padding:'4px'}} onClick={HandleShow}>...</button>
            <div>Buy Course</div>
            <a>Home</a>
            <a>Contents</a>
           
            <img src={img} style={{height:"20px", width:'20px', position:'relative', right:'-250px'}}/>
            <a> Cart</a>
        </div>
        
        </>
    )
}

export function HandleShow(){
    const [form, setForm]=useState(false);
    return(
        {form}
    )
}

export default Navbar;
