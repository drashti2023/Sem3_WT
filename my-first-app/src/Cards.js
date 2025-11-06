import { useState } from "react";

function Cards(){
    let arr = 
    [
        {id:101, fname:"Tyler", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRSsbv2eatEiQWE5yKqCLOy7vPIuoIvyYYA&s" },
        {id:102, fname:"Elena", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrXVq4hivq6waGzPVWj61KjguHCH1yvWFfw&s" },
        {id:103, fname:"Damon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34pHTpXIatGSSTuuoarymPGuAAhzW8EGzfQ&s" },
        {id:104, fname:"Jeremy", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6aPWAv8p-69EPLHKcljNW2k7VbZyYCTVGA&s" },
        {id:105, fname:"Matt", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMswvw7vwgy425hDpMDgOFfRhutx6ss36mVg&s" },
    ];
let myfun = arr.map((item)=>{
    return(
        <>
        <div className="col-3 my-3 mx-2">
        <div className="card" >
            <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.fname}</h5>
                    <h5 className="card-title">{item.id}</h5>
                    <p className="card-text"></p>
                </div>
        </div></div>
        </>
    )
});
return(<>{myfun}</>);
}
export default Cards;