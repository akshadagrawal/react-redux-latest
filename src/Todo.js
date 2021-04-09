import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
const Todo = () => {
    const {id} = useParams();
    const [todoDetails,setTodoDetails] = useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res)=>{
                const responseData= res.data;
                setTodoDetails(responseData);
      });
    },[id]);
    //console.log(todoDetails);
    const {id:todoId , userId, title, completed} =todoDetails || {};
    return (
        <div>
            {todoDetails ? (
                <div>
                    <h2>{`Todo Id: ${todoId}`}</h2>
                    <h2>{`User Id: ${userId}`}</h2>
                    <h2>{`Title : ${title}`}</h2>
                    <h2>{`Completed: ${completed}`}</h2>

                </div>
            ): <CircularProgress/>}
        </div>     
    );
}
export default Todo;