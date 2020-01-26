import React, { Component} from 'react';
import './App.css';
import tasks from './sample/task.json';
import Tasks from './components/Tasks';

class App extends Component {

  state = {
    tasks: tasks
  }

  render(){
    return <Tasks tasks={this.state.tasks}/>
  }
}

export default App;
