// todo is the array that is passed as the props
import axios from 'axios';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useToast } from "@/components/ui/use-toast"

import { Textarea } from "@/components/ui/textarea"


import { Button } from "@/components/ui/button";

export function Todos({ todos }) {
    const { toast } = useToast()

  async function changeCompleted(todo) {
    const mark = await axios.put(`http://localhost:3000/completed`, { id: todo });
    toast({
        description: "Your message has been sent.",
      })
    window.location.reload();
  }

  return (
    <div className="flex flex-wrap justify-center">
      {todos.map(function (todo) {
        return (
          <div key={todo._id} className="m-2">
            <Card className="w-64">
              <CardHeader>
                <CardTitle>
                  <h1>{todo.title}</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
              
                  <Textarea  disabled >
                    {todo.description}
                  </Textarea>
                
              </CardContent>
              <CardFooter>
                <Button onClick={() =>  changeCompleted(todo._id)}>
                  {todo.completed ? "Completed" : "Mark as Completed"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
