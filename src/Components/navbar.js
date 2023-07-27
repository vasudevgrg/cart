import img from '../images/shopping-cart.png';

const Navbar=()=>{
    return (
        <>
        <div style={{display: 'flex', flexDirection: 'row', backgroundColor: 'yellow', justifyContent:'space-between', padding:'10px'}}>
            <div>Buy Course</div>
            <a>Home</a>
            <a>Contents</a>
           
            <img src={img} style={{height:"20px", width:'20px', position:'relative', right:'-250px'}}/>
            <a> Cart</a>
        </div>
        </>
    )
}

export default Navbar;
