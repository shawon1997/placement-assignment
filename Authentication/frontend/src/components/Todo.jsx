import React, { Component } from 'react';
import axios from "axios"

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
        todo:[]
        }
        console.log(this.state.todo)
    }
    componentDidMount(){
        axios.get("http://localhost:8080/todo").then((res)=>this.setState({todo:res.data})).catch((err)=>console.log(err))
    }
    
    render() {
        let data=this.state.todo
        return (
            <div>todo
              {  data?.map((e)=>(
                    <div key={e._id}>
                        <p>Name: {e.name}</p>
                        <p>Role: {e.role}</p>
                        <p>CTC: {e.ctc}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Todo;
