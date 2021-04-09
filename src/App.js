import Counter from './Counter';
//import Employee from './Employee';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Todos from './Todos';
// import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './redux/ducks/user';
import Counter1 from './Counter1';


// const empInfo = [
//   {
//     firstName: 'Akshad',
//     lastName: 'Agrawal',
//     age: 18,
//     empId: 1
//   },
//   {
//     firstName: 'Anant',
//     lastName: 'Khandelwal',
//     age: 18,
//     empId: 2 
//   },
//   {
//     firstName: 'Abhishek',
//     lastName: 'Mundada',
//     age: 18,
//     empId: 3
//   },
// ]
function App() {
  // const count=useSelector((state)=>state.counter.count);



  // const dispatch=useDispatch()

  // useEffect(()=>{
  //   dispatch(getUser());
  // },[dispatch]);

  // const user= useSelector((state)=>state.user.user);

  // console.log(user);


  return (
    <div className="App">
      {/* {user && <h1>Hello {user.firstName}</h1>}
     <p>The Count is: {count} </p>

     { <Counter />} */
     }
    <Counter1/>
      {/* {empInfo.map(employee=>{
    //     return <Employee  key= {employee.empId} {...employee}/>  // {...iterable} spreading operator applied on any iterable or array its like {auto x} in c++
    //  })} */}
     </div>


    // <Router>
    //   <Switch>
    //     <Route exact path='/' children={<Todos/>} />
    //     <Route path='/todo/:id' children={<Todo/>} />

    //   </Switch>
    // </Router>
  );
}

export default App;
