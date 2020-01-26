import React, { Component } from 'react';
import Task from './Task'

class Tasks extends Component {
    render(){
        return (
            this.props.tasks.map((task,index)=>{
                return (
                    <Task task={task} key={index}/>
                )
            })
        )
    }
}

export default Tasks;