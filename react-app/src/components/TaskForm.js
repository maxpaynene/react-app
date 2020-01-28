import React, {Component} from 'react';

export default class TaskForm extends Component {

    onSubmit = e => {
        console.log('submit');
        e.preventDefault();
    }

    onChange = e => {
        console.log(e.target.value);
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="write a task" onChange={this.onChange} />
                <br/>
                <br/>
                <textarea placeholder="Write a Description" onChange={this.onChange} />
                <br/>
                <br/>
                <input type="submit" />
            </form>
        )
    }

}