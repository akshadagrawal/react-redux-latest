import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,test } from "./redux-toolkit/counterSlice";

const Counter1 = () => {

    const {count }= useSelector((state)=> state.counter );
    console.log(count);
    const dispatch= useDispatch();
    return ( 
        <div>
            <h2>The count is: {count} </h2>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button  onClick={()=> dispatch(decrement())}>Decrement</button>
            <button  onClick={()=> dispatch(test({testValue: 22}))}>Test</button>

        </div>
     );
}
 
export default Counter1;