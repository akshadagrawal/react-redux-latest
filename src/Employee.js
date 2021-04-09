const Employee = (props) => {
    const {firstName, lastName, age} =props; // destructuring 
    return (
        <div>
            <h1>This is employee {firstName} {lastName} with age {age} </h1>
        </div>
      );
}
 
export default Employee;