import React, { Component } from 'react';

class Task extends Component {
    render(){

        const { task } = this.props;

        return <div>
            <p key={this.props.task.id}>
                {task.id} - 
                {task.tittle} - 
                {task.description} - 
                {task.done.toString()}
                <input type="checkbox"/>
                <button>x</button>
            </p>
        </div>
    }
}

export default Task;