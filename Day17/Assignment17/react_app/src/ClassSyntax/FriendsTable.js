import { Component } from "react";

class FriendsTable extends Component{
    constructor (){
        super()
    }
    render(){
        return(
            <div>
            <ol>
                    {this.props.friends.map(item =>(
                        <li>{item}</li>
                        ))}
            </ol>
            </div>
        )
    }
}
export default FriendsTable