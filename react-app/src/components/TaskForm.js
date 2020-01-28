import React, {Component} from 'react';

export default class TaskForm extends Component {

    state = {
        tittle: '',
        description: ''
    }

    onSubmit = e => {
        console.log('submit',this.state);
        e.preventDefault();
    }

    onChange = e => {
        console.log([e.target.name],[e.target.value]);
        this.setState({[e.target.name]:[e.target.value]});
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    placeholder="write a task" 
                    onChange={this.onChange} 
                    value={this.state.tittle} 
                    name="tittle"
                />
                <br/>
                <br/>
                <textarea 
                    placeholder="Write a Description" 
                    onChange={this.onChange} 
                    value={this.state.description}
                    name="description"
                />
                <br/>
                <br/>
                <input type="submit" />
            </form>
        )
    }

}