import React, { Component } from 'react';
import Task from './Task'
import PropsType from 'prop-types';

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

Tasks.PropsType = {
    tasks: PropsType.array.isRequired
}

export default Tasks;