

const arr = [
    
        {id : 181,"name": "Santhoh","email":"santhosh@gmail.com"},
        {id : 177,"name": "Rithwik","email":"rikku@gmail.com"},
        {id : 141,"name": "Chips","email":"chips@gmail.com"},

    
];

function  Display(){
    return(
        <table>
        <thead>
            <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            </tr>
        </thead>
        <tbody>
        {  arr.map((user)=>
            <tr key = {user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
        )}
        </tbody>
        </table>
        
    )
};

export default Display;