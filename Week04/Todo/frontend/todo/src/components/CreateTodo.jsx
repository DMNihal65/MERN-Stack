import axios from "axios";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  



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
        <div className="mb-4" >
        <div className=" flex justify-center mt-4  ">
        <Card className ="w-fit shadow-lg" >
            <CardHeader>
                <div className="flex">

                    <Input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} className="w-64" ></Input>
                    <Input type="text" placeholder="Discription" className="w-64 ml-4" onChange={(e)=>setDiscription(e.target.value)}></Input> <br></br>
                    <Button size='sm' onClick={handlesubmit} className="text-sm py-2 px-4 ml-4 mt-1 " >Add a Todo</Button>
                 </div>
            </CardHeader>
  
        </Card>
        
        </div>
        

            
        </div>
    )
}