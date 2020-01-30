import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Task.css'

class Task extends Component {

    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'green' : 'red',
            textDecoration: this.props.task.done ? 'none' : 'line-through',
        }
    }

    render(){

        const { task } = this.props;

        return (
            <div>
                {/* Dandole className red para llamar al CSS Task.css */}
                <p key={this.props.task.id} style={this.StyleCompleted()} className="red">
                    {task.id} - 
                    {task.tittle} - 
                    {task.description} - 
                    {task.done.toString()}
                    <input 
                        type="checkbox"
                        onChange={ this.props.checkDone.bind(this, task.id) }
                        checked={task.done}
                    />
                    <button 
                        style={btndelete}
                        onClick={ this.props.deleteTask.bind(this, task.id) }
                    >x
                    </button>
                </p>
            </div>
        )
    }
}

Task.propTypes = {
    task: propTypes.object.isRequired
}

const btndelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#FFFFFF',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;