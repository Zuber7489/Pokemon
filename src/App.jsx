import axios from "axios";
import  React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () =>{

 const[num,setnum] = useState();
 const[name,setname] = useState();
 const[moves,setmoves] = useState();

useEffect(() =>{
     async function getData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
setname(res.data.name);
setmoves(res.data.moves.length);
    }
    getData();
});





    return(
        <>
        <h1 className="text-center text-primary">Real Time Pokemon Api</h1>
        <div className="center">
        <h1>You Select Number {num}</h1>
        <h1>My Name is <span style={{color:"red"}}>{name}</span></h1>
        <h1> I Have <span style={{color:"red"}}>{moves}</span> Moves</h1>
        <select value={num}  onChange={(inputevent)=>{
            setnum(inputevent.target.value);
        }}>

            <option value="3">3</option>
            <option value="25">25</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="4">4</option>

        </select></div>
        </>
    )


}


export default App;