import { useDispatch } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';
const Counter = () => {
    
    //const [count, setCount] =  useState(3);


    const dispatch= useDispatch();

    const handleIncrement=()=>{
        dispatch(increment());
    }
    const handleDecrement =() =>{
        dispatch(decrement());
    }
        
    
    return ( 
        <div>
            <h3>Welcome to my counter  :)</h3>
            <button onClick = {handleIncrement}> Increment</button>
            <button onClick = {handleDecrement}>Decrement</button>

        </div>
     );
}
 
export default Counter;