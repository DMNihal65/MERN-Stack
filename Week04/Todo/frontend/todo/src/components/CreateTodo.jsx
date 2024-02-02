import axios from "axios";
import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDiscription] = useState("");

    async function handlesubmit(){
        try{
            const sendData = await axios.post("http://localhost:3000/todo",{
            title: title,
            description: description,
        })
        console.log("Data sent succesfully"+sendData);
        window.location.reload();

        }
        catch(err){
            console.log(err.message);
        }
        
    }

    return (
        <div>
            <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} ></input>
            <input type="text" placeholder="Discription" onChange={(e)=>setDiscription(e.target.value)}></input> <br></br>

            <button onClick={handlesubmit}>Add a Todo</button>
        </div>
    )
}