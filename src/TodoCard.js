import  {useHistory} from 'react-router-dom';
const TodoCard = (props) => {
    const history= useHistory();
    const  {todo} = props;
    //console.log(todo);
    return  (
        <div style={{backgroundColor: "grey", margin: "10px", padding: "15px", width:"200px"}} onClick={()=>{ history.push(`/todo/${todo.id}`)}} >
             <h2>{`Title: ${todo.title}`}</h2>
             <p> {`Completed: ${todo.completed}`}</p>
        </div>
       
    )
}
 
export default TodoCard;