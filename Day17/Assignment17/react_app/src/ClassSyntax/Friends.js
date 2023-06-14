import { Component } from "react";
import FriendsTable from "./FriendsTable"
//Here class name is component name
class Friends extends Component{
    constructor(){
        super()//Must call it
        //Here this.state is the state and create object and properties of object are states
        this.state={
            friends : ["Sumit", "Anubhav", "Rajat"]
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        //Here binding the this scope
    }
    handleSubmit(event){
        event.preventDefault()
        var name = event.target.name.value
        //setState funciton is used to set the state
        // Assign value and re-render
        //this.setState({property: New_Value})
        this.setState({friends: [...this.state.friends, name]})
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name"></input>
                <button>Add to list</button>
            </form>
                {/* <ol>
                    {this.state.friends.map(item => <li>{item}</li>)}
                </ol> */}
                <FriendsTable friends= {this.state.friends}/>
            </div>
        )
    }
}
export default Friends