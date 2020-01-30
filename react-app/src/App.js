import React, { Component} from 'react';
import './App.css';
import tasks from './sample/task.json';
//Importando components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (tittle, description) => {
    const newTask = {
      id: this.state.tasks.length,
      tittle: tittle,
      description: description,
      done: false
    }
    console.log("Agregando una nueva tarea",newTask);
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  deleteTask = id => {
    const newsTasks = this.state.tasks.filter(task => task.id !== id);
    console.log(newsTasks);
    this.setState({tasks:newsTasks});
  }

  checkDone = id => {
    const newsTasks = this.state.tasks.map(task => {
      if(id === task.id) 
        task.done = !task.done;
      return task;
    });
    this.setState({tasks:newsTasks});
  }

  render(){
    return (
      <div>
        <TaskForm addTask={this.addTask}/>
        <Tasks 
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
        />
      </div>
    )
  }
}

export default App;
