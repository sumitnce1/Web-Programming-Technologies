import { useState } from "react";

function Register(){
    const [users, setUsers] = useState([]);

    const handleSubmit = function (event) { event.preventDefault();
        var name = event.target.name.value;
        var dob = event.target.dob.value;
        var temp = {
        name: name,
        dob: dob,
        }; setUsers([...users, temp])
        };

    return <div>
        <form onSubmit={handleSubmit}>
            Enter name: <input type="text" name="name"></input> <br/>
            Enter DOB: <input type="date" name="dob"></input> <br/>
            <button>Save</button>
            <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(item => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.dob}</td>
                            </tr>
                        })}
                    </tbody>
            </table>
        </form>
    </div>
}
export default Register;